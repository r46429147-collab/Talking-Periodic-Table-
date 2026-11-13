import { categories, type ElementRecord } from '@/data/elements';

export type ElementVoiceAdapter = (
  element: ElementRecord,
  onSpeakingChange?: (speaking: boolean) => void,
) => boolean;

let activeElementNumber: number | null = null;

function buildIntroduction(element: ElementRecord) {
  const family = categories.find((item) => item.key === element.category)?.labelAr;
  const details = [
    family ? `أنتمي إلى عائلة ${family}.` : '',
    `حالتي في درجة حرارة الغرفة: ${element.phase}.`,
    element.summaryAr,
    ...element.propertiesAr.slice(0, 2),
    ...element.usesAr.slice(0, 2),
    element.occurrenceAr,
    element.radioactive
      ? 'أنا عنصر مشع، وتختلف خصائص الإشعاع باختلاف نظائري.'
      : '',
  ].filter(Boolean);

  return [
    `مرحبًا! أنا ${element.nameAr}. رمزي الكيميائي ${element.symbol}، وعددي الذري ${element.number}.`,
    ...details,
    'يسعدني أن أكون جزءًا من عالم الكيمياء!',
  ].join(' ');
}

export const elementVoiceAdapter: ElementVoiceAdapter = (
  element,
  onSpeakingChange,
) => {
  if (
    typeof window === 'undefined' ||
    !('speechSynthesis' in window) ||
    typeof SpeechSynthesisUtterance === 'undefined'
  ) {
    throw new Error('ميزة قراءة النص غير متاحة في هذا المتصفح.');
  }

  const speech = window.speechSynthesis;
  if (
    activeElementNumber === element.number &&
    (speech.speaking || speech.pending)
  ) {
    speech.cancel();
    activeElementNumber = null;
    onSpeakingChange?.(false);
    return false;
  }

  speech.cancel();
  const utterance = new SpeechSynthesisUtterance(buildIntroduction(element));
  utterance.lang = 'ar-SA';
  utterance.rate = 0.94;
  utterance.pitch = 1;
  const arabicVoice = speech
    .getVoices()
    .find((voice) => voice.lang.toLocaleLowerCase().startsWith('ar'));
  if (arabicVoice) utterance.voice = arabicVoice;

  activeElementNumber = element.number;
  utterance.onend = () => {
    if (activeElementNumber === element.number) {
      activeElementNumber = null;
      onSpeakingChange?.(false);
    }
  };
  utterance.onerror = () => {
    if (activeElementNumber === element.number) {
      activeElementNumber = null;
      onSpeakingChange?.(false);
    }
  };
  speech.speak(utterance);
  onSpeakingChange?.(true);
  return true;
};

export function onElementVoiceClick(
  element: ElementRecord,
  onSpeakingChange?: (speaking: boolean) => void,
) {
  return elementVoiceAdapter(element, onSpeakingChange);
}

export function stopElementVoice() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  activeElementNumber = null;
}

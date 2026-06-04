const STORE_KEY = "minsal-acupuntura-progress-v1";
const STREAK_KEY = "shenqi_racha";

const modules = [
  {
    id: "1",
    title: "Fundamentos MTC",
    subtitle: "Yin Yang, cinco elementos e historia",
    color: "#5d2e3f",
    icon: "yin-yang",
  },
  {
    id: "2",
    title: "Sustancias y organos",
    subtitle: "Zang Fu, Qi, Sangre y fluidos",
    color: "#959f64",
    icon: "activity",
  },
  {
    id: "3",
    title: "Canales y puntos",
    subtitle: "Recorridos, colaterales y localizacion",
    color: "#baa6a2",
    icon: "map",
  },
  {
    id: "4",
    title: "Diagnostico",
    subtitle: "Lengua, pulso, interrogatorio y observacion",
    color: "#5d2e3f",
    icon: "pulse",
  },
  {
    id: "5",
    title: "Sindromes",
    subtitle: "Diferenciacion y patrones clinicos",
    color: "#959f64",
    icon: "layers",
  },
  {
    id: "6",
    title: "Tecnicas",
    subtitle: "Puncion, moxa, ventosas y microsistemas",
    color: "#baa6a2",
    icon: "needle",
  },
  {
    id: "7",
    title: "Tratamientos",
    subtitle: "Estrategias por enfermedad y combinacion de puntos",
    color: "#5d2e3f",
    icon: "cross",
  },
  {
    id: "8",
    title: "Salud occidental",
    subtitle: "Ciencias de la salud, señales de alarma y derivacion",
    color: "#959f64",
    icon: "activity",
  },
  {
    id: "9",
    title: "Legislacion",
    subtitle: "Decreto 42, Decreto 123 y politica de medicinas complementarias",
    color: "#5d2e3f",
    icon: "book",
  },
  {
    id: "10",
    title: "Sistema de salud",
    subtitle: "GES, red asistencial, salud publica y epidemiologia",
    color: "#baa6a2",
    icon: "layers",
  },
  {
    id: "11",
    title: "Simulacro MINSAL",
    subtitle: "Practica integrada con todos los modulos",
    color: "#5d2e3f",
    icon: "trophy",
  },
  {
    id: "sin clase",
    title: "Banco mixto",
    subtitle: "Preguntas MINSAL y Azupa sin clase asignada",
    color: "#959f64",
    icon: "shuffle",
  },
];

const MODULE_GUIDES = {
  "1": {
    hook: "La historia no se memoriza como fechas sueltas: sirve para ubicar autores, textos clásicos y evolución de la acupuntura dentro de un sistema médico.",
    essentials: ["Huangdi Neijing como base teórica", "Shen Nong y materia médica", "Zhang Zhongjing y clínica de enfermedades febriles", "Reconocimiento moderno y regulación sanitaria"],
    flow: ["Textos clásicos", "Escuelas médicas", "Llegada a Occidente", "Reconocimiento sanitario"],
    table: [["Texto/autor", "Qué recordar"], ["Huangdi Neijing", "Yin-Yang, canales y fisiología clásica"], ["Shanghan Lun", "Enfermedades por frío y razonamiento clínico"], ["OMS/MINSAL", "Reconocimiento y marco regulatorio"]],
    exam: ["Identificar textos fundacionales", "Relacionar autores con aportes", "Diferenciar tradición histórica de normativa actual"],
  },
  "2": {
    hook: "Este módulo explica cómo la MTC entiende el funcionamiento interno: los Zang-Fu transforman y gobiernan; Qi mueve, Xue nutre y los fluidos humectan. No son piezas aisladas, son una red funcional.",
    essentials: ["Zang: órganos Yin que almacenan sustancias vitales", "Fu: vísceras Yang que reciben, transforman y eliminan", "Qi: movimiento, defensa, transformación, contención y calor", "Xue: nutrición, anclaje del Shen y soporte de tejidos", "Jin-Ye: líquidos claros y densos que humectan y nutren"],
    flow: ["Alimento y aire", "Bazo/Pulmón transforman", "Qi impulsa", "Xue nutre", "Riñón conserva raíz"],
    table: [["Concepto", "Idea de examen"], ["Corazón", "Gobierna sangre y aloja Shen"], ["Bazo", "Transforma, transporta y mantiene sangre en vasos"], ["Pulmón", "Gobierna Qi y respiración, difunde y desciende"], ["Riñón", "Almacena Jing y sostiene Yin/Yang raíz"], ["Hígado", "Asegura libre flujo del Qi"]],
    exam: ["No confundir órgano anatómico con función energética", "Relacionar síntoma con función: fatiga, edema, insomnio, palpitaciones", "Pensar en pares: Qi mueve/Xue nutre; Bazo produce/Riñón almacena"],
  },
  "3": {
    hook: "Canales y puntos son el mapa operativo: muestran por dónde circulan Qi y Xue, cómo se conectan órganos y superficie, y dónde intervenir clínicamente.",
    essentials: ["12 canales regulares y su lógica mano/pie", "8 vasos extraordinarios como reservorios y regulación profunda", "Puntos Shu, Mu, Yuan, Luo, Xi y He-Mar", "Cunometría y referencias anatómicas"],
    flow: ["Canal", "Trayecto", "Categoría de punto", "Indicación clínica", "Combinación terapéutica"],
    table: [["Categoría", "Uso típico"], ["Shu espalda", "Relación con Zang-Fu y espalda"], ["Mu anterior", "Diagnóstico/tratamiento frontal"], ["Yuan", "Qi original del órgano"], ["Luo", "Conexión interior-exterior"]],
    exam: ["Ubicar categorías de puntos", "Reconocer trayectos y relaciones órgano-canal", "Elegir puntos por estrategia, no por lista"],
  },
  "4": {
    hook: "Diagnosticar en MTC es ordenar señales: observar, escuchar/oler, preguntar y palpar para llegar a un patrón, no solo a un síntoma.",
    essentials: ["Cuatro métodos diagnósticos", "Lengua: cuerpo, saburra, color y humedad", "Pulso: profundidad, fuerza, velocidad y cualidad", "Ocho principios: interior/exterior, frío/calor, vacío/exceso, Yin/Yang"],
    flow: ["Signos", "Síntomas", "Lengua/pulso", "Ocho principios", "Patrón final"],
    table: [["Dato", "Qué orienta"], ["Lengua pálida", "Vacío/frío o deficiencia"], ["Saburra amarilla", "Calor/humedad-calor"], ["Pulso rápido", "Calor"], ["Pulso débil", "Vacío"]],
    exam: ["Distinguir método diagnóstico de patrón", "No saltar de síntoma único a diagnóstico", "Integrar lengua y pulso con interrogatorio"],
  },
  "5": {
    hook: "La diferenciación de síndromes transforma datos sueltos en patrones clínicos tratables.",
    essentials: ["Vacío y exceso", "Frío y calor", "Qi, Xue, humedad, flema y estasis", "Patrones Zang-Fu frecuentes"],
    flow: ["Recoger datos", "Clasificar por ocho principios", "Ubicar sustancia u órgano", "Definir principio terapéutico"],
    table: [["Patrón", "Pista"], ["Estasis de Xue", "Dolor fijo/punzante"], ["Humedad", "Pesadez, edema, secreciones"], ["Vacío de Qi", "Cansancio, voz baja, sudor"], ["Calor", "Sed, irritabilidad, lengua roja"]],
    exam: ["Diferenciar raíz y manifestación", "Relacionar patrón con principio terapéutico", "Evitar tratar solo el síntoma"],
  },
  "6": {
    hook: "Las técnicas auxiliares amplían la intervención, pero el examen suele preguntar indicación, seguridad y contraindicación.",
    essentials: ["Moxa: calentar, tonificar y dispersar frío", "Ventosas: movilizar Qi/Xue y liberar superficie", "Auriculoterapia: microsistema reflejo", "Bioseguridad y manejo de incidentes"],
    flow: ["Indicación", "Técnica", "Precaución", "Respuesta esperada", "Seguimiento"],
    table: [["Técnica", "Clave"], ["Moxa", "Frío, vacío, Yang debilitado"], ["Ventosa", "Estasis, dolor muscular, superficie"], ["Aurículo", "Mapa reflejo y apoyo sintomático"], ["Electro", "Estimulación controlada"]],
    exam: ["No aplicar técnica si hay riesgo", "Recordar higiene, material y descarte", "Distinguir indicación de contraindicación"],
  },
  "7": {
    hook: "Tratamiento es estrategia: principio terapéutico, selección de puntos, técnica y seguimiento.",
    essentials: ["Definir raíz y rama", "Elegir puntos locales, distales y de categoría", "Combinar tonificación/dispersión", "Evaluar derivación cuando hay alarma"],
    flow: ["Diagnóstico", "Principio", "Puntos base", "Técnica", "Reevaluación"],
    table: [["Paso", "Pregunta útil"], ["Diagnóstico", "¿Qué patrón explica el caso?"], ["Principio", "¿Tonificar, mover, calentar, drenar?"], ["Puntos", "¿Local, distal, Shu/Mu/Yuan/Luo?"], ["Seguridad", "¿Hay que derivar?"]],
    exam: ["Justificar selección de puntos", "No confundir receta con razonamiento", "Priorizar seguridad clínica"],
  },
  "8": {
    hook: "Salud occidental en el MINSAL busca seguridad: reconocer alarma, derivar oportunamente y manejar conceptos básicos de salud.",
    essentials: ["Signos vitales y urgencias", "RCP y primeros auxilios", "Factores de riesgo cardiovascular", "Cáncer, EPOC, diabetes e infecciones frecuentes", "Bioseguridad y derivación"],
    flow: ["Síntoma", "Alarma", "No tratar si corresponde", "Derivar", "Registrar"],
    table: [["Señal", "Conducta"], ["Dolor torácico", "Derivar/urgencia según contexto"], ["Fractura probable", "Urgencia"], ["Cefalea progresiva con vómitos", "Derivar"], ["Aguja contaminada", "Desechar"]],
    exam: ["Elegir derivación sobre intervención cuando hay riesgo", "Reconocer síntomas de alarma", "Aplicar bioseguridad básica"],
  },
  "9": {
    hook: "La normativa define qué puede hacer el acupunturista, bajo qué condiciones y con qué responsabilidades sanitarias.",
    essentials: ["Decreto 42: marco para prácticas médicas alternativas", "Decreto 123: reconocimiento y regulación de acupuntura", "Recintos, autorización y ejercicio auxiliar de salud", "Política 2024 de medicinas complementarias"],
    flow: ["Marco legal", "Competencias", "Recinto autorizado", "Registro/responsabilidad", "Límites y derivación"],
    table: [["Norma", "Qué fija"], ["DS 42", "Regula prácticas médicas alternativas"], ["DS 123", "Reconoce y regula acupuntura"], ["Código Sanitario", "Marco general de salud"], ["Política 2024", "Integración y bienestar"]],
    exam: ["Distinguir autorización de competencia clínica", "Recordar límites profesionales", "Relacionar norma con ejercicio seguro"],
  },
  "10": {
    hook: "El sistema de salud chileno aparece en preguntas sobre red asistencial, APS, GES, epidemiología y salud pública.",
    essentials: ["APS y red asistencial", "GES/AUGE y garantías explícitas", "Promoción, prevención y vigilancia", "Epidemiología de enfermedades no transmisibles"],
    flow: ["Población", "Riesgo", "Prevención", "Red asistencial", "Garantía/derivación"],
    table: [["Concepto", "Clave"], ["APS", "Puerta de entrada y resolutividad"], ["GES", "Garantías de acceso, oportunidad, protección financiera y calidad"], ["Epidemiología", "Frecuencia, distribución y determinantes"], ["Salud pública", "Acciones colectivas y políticas"]],
    exam: ["Diferenciar promoción y prevención", "Entender red asistencial", "Reconocer rol de epidemiología"],
  },
  "11": {
    hook: "El simulacro integra MTC, salud occidental, normativa y seguridad. Entrena como examen: mezcla temas y prioriza razonamiento.",
    essentials: ["Leer bien la pregunta", "Descartar opciones peligrosas", "Priorizar seguridad y normativa", "Relacionar patrón con punto o conducta"],
    flow: ["Leer", "Detectar tema", "Eliminar distractores", "Elegir conducta segura", "Revisar explicación"],
    table: [["Estrategia", "Uso"], ["Seguridad primero", "Derivar si hay alarma"], ["Normativa", "No exceder rol profesional"], ["MTC", "Patrón antes que receta"], ["Tiempo", "No quedarse pegado"]],
    exam: ["Practicar con temporizador", "Revisar errores", "Volver a teoría del módulo débil"],
  },
};

const payload = window.MINSAL_QUESTIONS || { questions: [], summary: {} };
const extraPayload = window.MINSAL_EXTRA_QUESTIONS || { questions: [] };
const QUESTION_CORRECTIONS = {
  q0040: {
    answer: "Bazo",
    explanation: "El bazo contiene la sangre",
  },
  q0042: {
    answer: "Bazo",
    explanation: "El bazo se abre en la boca",
  },
};

function normalizeQuestion(question) {
  const correction = QUESTION_CORRECTIONS[question.id];
  if (!correction) return question;
  const answerIndex = question.options.findIndex((option) => option === correction.answer);
  if (answerIndex < 0) return question;
  return {
    ...question,
    answerIndex,
    explanation: correction.explanation,
  };
}

const localQuestions = [...payload.questions, ...extraPayload.questions].map(normalizeQuestion);
let questions = [...localQuestions];
const lessonPayload = window.MINSAL_LESSONS || { lessons: [], summaryImages: [] };
const extraLessonPayload = window.MINSAL_EXTRA_LESSONS || { lessons: [] };
const LESSON_ORDER = {
  "shenqi-m01-historia": 10,
  "shenqi-modulo2-yinyang": 20,
  "wu-xing-cinco-elementos": 30,
  "sustancias-vitales-mtc": 40,
  "shenqi-modulo4-zangfu-qisangre-fluidos": 50,
  "zangfu-shenqi-modulo5": 60,
  "shenqi-manual-diagnostico-tomo1": 70,
  "shenqi-manual-diagnostico-tomo2": 80,
  "manual-diferenciacion-de-sindromes-mtc-minsal": 90,
  "shenqi-manual-morfotipos": 100,
  "shenqi-manual-canales-tomo1": 110,
  "shenqi-manual-canales-tomo2": 120,
  "shenqi-modulo-seleccionpuntos": 130,
  "manual-clinico-enfermedades-estrategias-terapeuticas-mtc-minsal": 140,
  "fuego-y-vacio-moxibustion-ventosas": 150,
  "auriculoterapia-shenqi-con-diagramas": 160,
  "epidemiologia-salud-ent": 200,
  "ciencias-salud-examen-occidental": 210,
  "manual-salud-publica-enfermeria-red-asistencial-mtc-minsal": 220,
  "plan-ges-garantias-explicitas": 230,
  "decreto-42-practicas-medicas-alternativas": 240,
  "decreto-123-acupuntura": 250,
  "politica-medicina-complementaria-2024": 260,
};
const lessons = [...lessonPayload.lessons, ...extraLessonPayload.lessons].sort((a, b) => {
  const byOrder = (LESSON_ORDER[a.id] ?? 999) - (LESSON_ORDER[b.id] ?? 999);
  if (byOrder) return byOrder;
  return a.title.localeCompare(b.title, "es");
});
const summaryImages = lessonPayload.summaryImages;

let state = loadState();
let screen = "home";
let activeModule = modules[0].id;
let activeStudyTab = "teoria";
let activeLessonId = lessons[0]?.id || null;
let session = null;
let timerId = null;
let muted = false;
let audioPlaying = false;
let questionSource = "local";

function supabaseEnabled() {
  const config = window.SHENQI_SUPABASE || {};
  return Boolean(config.url && config.anonKey);
}

function remoteQuestionToLocal(row) {
  const options = Array.isArray(row.options) ? row.options : [];
  const answerIndex = Number.isInteger(row.answer_index)
    ? row.answer_index
    : options.findIndex((option) => option === row.correct_answer);
  return normalizeQuestion({
    id: row.id,
    source: row.source || "Supabase",
    classKey: String(row.class_key || "sin-clase"),
    module: row.module || "Sin clasificar",
    prompt: row.prompt,
    options,
    answerIndex: answerIndex >= 0 ? answerIndex : 0,
    explanation: row.explanation || "",
    difficulty: row.difficulty || "base",
  });
}

async function loadSupabaseQuestions() {
  if (!supabaseEnabled()) return false;
  const { url, anonKey } = window.SHENQI_SUPABASE;
  const endpoint = `${url.replace(/\/$/, "")}/rest/v1/shenqi_questions?select=*&active=eq.true&order=class_key.asc,source_row.asc`;
  const response = await fetch(endpoint, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
  });
  if (!response.ok) throw new Error(`Supabase respondio ${response.status}`);
  const rows = await response.json();
  if (!Array.isArray(rows) || !rows.length) return false;
  const remoteQuestions = rows.map(remoteQuestionToLocal).filter((q) => q.prompt && q.options.length >= 2);
  const localExtraQuestions = (extraPayload.questions || []).map(normalizeQuestion);
  questions = [...remoteQuestions, ...localExtraQuestions];
  questionSource = "supabase";
  return questions.length > 0;
}

function loadState() {
  const fallback = {
    xp: 0,
    streak: getCurrentStreak(),
    answered: 0,
    correct: 0,
    mastered: {},
    mistakes: [],
    completedByModule: {},
    lastMode: "practice",
  };
  try {
    const saved = { ...fallback, ...JSON.parse(localStorage.getItem(STORE_KEY)) };
    saved.mastered = saved.mastered || {};
    saved.mistakes = Array.isArray(saved.mistakes) ? saved.mistakes : [];
    saved.completedByModule = saved.completedByModule || {};
    return saved;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function todayKey() {
  return new Date().toISOString().split("T")[0];
}

function readStreak() {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY)) || { dias: 0, ultimoDia: null };
  } catch {
    return { dias: 0, ultimoDia: null };
  }
}

function getCurrentStreak() {
  const { dias, ultimoDia } = readStreak();
  if (!ultimoDia) return 0;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().split("T")[0];
  return ultimoDia === todayKey() || ultimoDia === yesterdayKey ? dias : 0;
}

function registerStudyDay() {
  const { dias, ultimoDia } = readStreak();
  const today = todayKey();
  if (ultimoDia === today) {
    state.streak = getCurrentStreak();
    return;
  }
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().split("T")[0];
  const nextDays = ultimoDia === yesterdayKey ? dias + 1 : 1;
  localStorage.setItem(STREAK_KEY, JSON.stringify({ dias: nextDays, ultimoDia: today }));
  state.streak = nextDays;
}

function playSound(type) {
  if (muted) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.45, ctx.currentTime);
    if (type === "correct") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.55);
    } else {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(200, ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.32);
    }
  } catch {}
}

function byModule(moduleId) {
  if (moduleId === "11") return questions;
  return questions.filter((q) => q.classKey === moduleId);
}

function moduleById(moduleId) {
  return modules.find((mod) => mod.id === moduleId) || modules[0];
}

function lessonsByModule(moduleId) {
  if (moduleId === "11") return lessons.slice(0, 8);
  return lessons.filter((lesson) => lesson.moduleId === moduleId);
}

function pct(value, total) {
  return total ? Math.round((value / total) * 100) : 0;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function unique(items) {
  return [...new Set(items)];
}

function sessionAmount(mode, total) {
  if (mode === "exam") return Math.min(65, total);
  if (mode === "daily") return Math.min(8, total);
  if (mode === "speed") return Math.min(15, total);
  return Math.min(12, total);
}

function progressForModule(moduleId) {
  state.completedByModule = state.completedByModule || {};
  state.completedByModule[moduleId] = unique(state.completedByModule[moduleId] || []);
  return state.completedByModule[moduleId];
}

function selectLeveledQuestions(mode, moduleId, source, amount) {
  if (mode === "mistakes" || mode === "exam") {
    return {
      queue: shuffle(source).slice(0, amount),
      isReview: mode === "mistakes",
      levelNumber: null,
    };
  }

  const completed = progressForModule(moduleId);
  const completedSet = new Set(completed);
  const mistakeSet = new Set(state.mistakes || []);
  const fresh = source.filter((q) => !completedSet.has(q.id) && !mistakeSet.has(q.id));
  const moduleMistakes = source.filter((q) => mistakeSet.has(q.id));

  if (fresh.length) {
    return {
      queue: shuffle(fresh.slice(0, amount)),
      isReview: false,
      levelNumber: Math.floor(completed.length / Math.max(amount, 1)) + 1,
    };
  }

  if (moduleMistakes.length) {
    return {
      queue: shuffle(moduleMistakes).slice(0, amount),
      isReview: true,
      levelNumber: "repaso",
    };
  }

  state.completedByModule[moduleId] = [];
  return {
    queue: shuffle(source.slice(0, amount)),
    isReview: false,
    levelNumber: 1,
    restarted: true,
  };
}

function icon(name) {
  const paths = {
    "yin-yang": "M12 2a10 10 0 1 0 0 20 5 5 0 1 1 0-10 5 5 0 1 0 0-10Zm0 14.5h.01M12 7.5h.01",
    activity: "M3 12h4l3-8 4 16 3-8h4",
    map: "M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Zm0-15v15m6-12v15",
    pulse: "M4 13h4l2-5 4 10 2-5h4",
    layers: "m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5",
    needle: "m14 4 6 6-9 9H5v-6l9-9Zm2 8-4-4",
    cross: "M12 5v14M5 12h14",
    shuffle: "M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
    play: "M8 5v14l11-7-11-7Z",
    trophy: "M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Zm0 2H4a3 3 0 0 0 3 3m10-3h3a3 3 0 0 1-3 3",
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Zm0 0v-15",
    flame: "M12 22a7 7 0 0 0 7-7c0-4-3-6-4-9-2 2-2 5-2 5s-3-3-2-8c-4 3-6 7-6 12a7 7 0 0 0 7 7Z",
    x: "M18 6 6 18M6 6l12 12",
    check: "m20 6-11 11-5-5",
    home: "M3 11 12 3l9 8v10h-6v-6H9v6H3V11Z",
    chart: "M4 19V5m5 14V9m5 10V3m5 16v-7",
    zap: "M13 2 3 14h8l-1 8 11-13h-8l1-7Z",
    cards: "M7 3h10a2 2 0 0 1 2 2v12M5 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z",
    link: "M10 13a5 5 0 0 0 7.07 0l2-2a5 5 0 0 0-7.07-7.07l-1.14 1.14M14 11a5 5 0 0 0-7.07 0l-2 2A5 5 0 0 0 12 20.07l1.14-1.14",
    volume: "M11 5 6 9H3v6h3l5 4V5Zm4 4a4 4 0 0 1 0 6m3-9a8 8 0 0 1 0 12",
    pause: "M8 5v14M16 5v14",
    route: "M4 19c4-8 12 0 16-8M4 5h.01M20 19h.01",
    table: "M3 5h18M3 12h18M3 19h18M8 5v14M16 5v14",
    eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name] || paths.book}"/></svg>`;
}

function shortText(text, size = 120) {
  return text.length > size ? `${text.slice(0, size).trim()}...` : text;
}

function clearTimer() {
  if (timerId) window.clearInterval(timerId);
  timerId = null;
}

function beginTimer() {
  clearTimer();
  timerId = window.setInterval(() => {
    if (!session?.deadline) return clearTimer();
    if (Date.now() >= session.deadline) {
      clearTimer();
      screen = "result";
      render();
    } else if (screen === "quiz") {
      render();
    }
  }, 1000);
}

function lessonSpeechText(lesson) {
  return [
    lesson.title,
    lesson.summary,
    ...lesson.capsules.flatMap((capsule) => [
      capsule.title,
      ...capsule.paragraphs,
    ]),
  ].join(". ");
}

function speakLesson(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson || !("speechSynthesis" in window)) {
    window.alert("Este navegador no tiene audio de lectura disponible.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(lessonSpeechText(lesson));
  audioPlaying = true;
  utterance.onend = () => {
    audioPlaying = false;
    render();
  };
  utterance.onerror = () => {
    audioPlaying = false;
    render();
  };
  utterance.lang = "es-CL";
  utterance.rate = 0.92;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice = voices.find((voice) => voice.lang?.toLowerCase().startsWith("es"));
  if (spanishVoice) utterance.voice = spanishVoice;
  window.speechSynthesis.speak(utterance);
  render();
}

function stopLessonAudio() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  audioPlaying = false;
}

function moduleSpeechText(moduleId) {
  const mod = moduleById(moduleId);
  const guide = MODULE_GUIDES[moduleId];
  if (guide) {
    return [
      mod.title,
      guide.hook,
      "Lo esencial.",
      ...guide.essentials,
      "Mapa para entender.",
      ...guide.flow,
      "Cómo lo preguntan en el examen.",
      ...guide.exam,
    ].join(". ");
  }
  const moduleLessons = lessonsByModule(moduleId);
  return [
    mod.title,
    mod.subtitle,
    ...moduleLessons.flatMap((lesson) => [
      lesson.title,
      lesson.summary,
      ...lesson.capsules.flatMap((capsule) => [capsule.title, ...capsule.paragraphs]),
    ]),
  ].join(". ");
}

function speakModule(moduleId) {
  if (!("speechSynthesis" in window)) {
    window.alert("Este navegador no tiene audio de lectura disponible.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(moduleSpeechText(moduleId));
  audioPlaying = true;
  utterance.onend = () => {
    audioPlaying = false;
    render();
  };
  utterance.onerror = () => {
    audioPlaying = false;
    render();
  };
  utterance.lang = "es-CL";
  utterance.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice = voices.find((voice) => voice.lang?.toLowerCase().startsWith("es"));
  if (spanishVoice) utterance.voice = spanishVoice;
  window.speechSynthesis.speak(utterance);
  render();
}

function printModulePdf(moduleId) {
  const mod = moduleById(moduleId);
  const moduleLessons = lessonsByModule(moduleId);
  const body = moduleLessons.map((lesson) => `
    <section>
      <h2>${lesson.title}</h2>
      <p>${lesson.summary}</p>
      ${lesson.capsules.map((capsule) => `
        <h3>${capsule.title}</h3>
        ${capsule.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      `).join("")}
    </section>
  `).join("");
  const win = window.open("", "_blank");
  if (!win) return;
  win.document.write(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <title>ShenQi - ${mod.title}</title>
        <style>
          body { font-family: Inter, Arial, sans-serif; color: #211b1d; margin: 40px; line-height: 1.6; }
          h1, h2, h3 { color: #5d2e3f; }
          h1 { font-size: 32px; }
          h2 { margin-top: 28px; border-bottom: 2px solid #c5af99; padding-bottom: 6px; }
          section { break-inside: avoid; }
        </style>
      </head>
      <body>
        <h1>ShenQi - ${mod.title}</h1>
        <p>${mod.subtitle}</p>
        ${body || "<p>Este módulo aún no tiene texto completo cargado.</p>"}
      </body>
    </html>
  `);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 300);
}

function startSession(mode, moduleId = activeModule) {
  const source = mode === "mistakes"
    ? questions.filter((q) => state.mistakes.includes(q.id))
    : mode === "exam"
      ? questions
      : byModule(moduleId);
  const amount = sessionAmount(mode, source.length);
  const picked = selectLeveledQuestions(mode, moduleId, source, amount);
  session = {
    mode,
    moduleId,
    queue: picked.queue,
    index: 0,
    answers: [],
    selected: null,
    checked: false,
    lives: mode === "exam" ? 5 : mode === "speed" ? 99 : 3,
    deadline: mode === "speed" ? Date.now() + 60000 : null,
    startedAt: Date.now(),
    isReview: picked.isReview,
    levelNumber: picked.levelNumber,
    restartedCycle: picked.restarted || false,
  };
  state.lastMode = mode;
  saveState();
  screen = "quiz";
  if (mode === "speed") beginTimer();
  render();
}

function startGame(type, moduleId = activeModule) {
  clearTimer();
  const source = byModule(moduleId).length ? byModule(moduleId) : questions;
  if (type === "cards") {
    session = {
      mode: "cards",
      moduleId,
      queue: shuffle(source).slice(0, 10),
      index: 0,
      answers: [],
      revealed: false,
      startedAt: Date.now(),
    };
  }
  if (type === "match") {
    const pairs = shuffle(source).slice(0, 4);
    const cards = shuffle(pairs.flatMap((q) => [
      { id: `${q.id}-q`, pairId: q.id, kind: "pregunta", text: shortText(q.prompt, 95) },
      { id: `${q.id}-a`, pairId: q.id, kind: "respuesta", text: shortText(q.options[q.answerIndex], 80) },
    ]));
    session = {
      mode: "match",
      moduleId,
      cards,
      selectedCard: null,
      matched: [],
      attempts: 0,
      answers: [],
      startedAt: Date.now(),
    };
  }
  state.lastMode = type;
  saveState();
  screen = "game";
  render();
}

function currentQuestion() {
  return session?.queue[session.index];
}

function answer(index) {
  if (!session || session.checked) return;
  session.selected = index;
  session.checked = true;
  const q = currentQuestion();
  const isCorrect = q.answerIndex === index;
  playSound(isCorrect ? "correct" : "wrong");
  registerStudyDay();
  if (!isCorrect) session.lives -= 1;
  session.answers.push({ id: q.id, selected: index, correct: isCorrect });
  state.answered += 1;
  if (isCorrect) {
    state.correct += 1;
    state.xp += session.mode === "exam" ? 15 : session.mode === "speed" ? 12 : 10;
    state.mastered[q.classKey] = (state.mastered[q.classKey] || 0) + 1;
    if (!["exam", "mistakes"].includes(session.mode)) {
      const completed = progressForModule(q.classKey);
      if (!completed.includes(q.id)) completed.push(q.id);
    }
    state.mistakes = state.mistakes.filter((id) => id !== q.id);
  } else if (!state.mistakes.includes(q.id)) {
    state.mistakes.push(q.id);
  }
  saveState();
  render();
}

function nextQuestion() {
  if (!session) return;
  if (session.index >= session.queue.length - 1 || session.lives <= 0) {
    clearTimer();
    screen = "result";
  } else {
    session.index += 1;
    session.selected = null;
    session.checked = false;
  }
  render();
}

function revealCard() {
  if (!session || session.mode !== "cards") return;
  session.revealed = true;
  render();
}

function rateCard(known) {
  if (!session || session.mode !== "cards") return;
  const q = session.queue[session.index];
  session.answers.push({ id: q.id, correct: known });
  state.answered += 1;
  if (known) {
    playSound("correct");
    registerStudyDay();
    state.correct += 1;
    state.xp += 8;
    state.mastered[q.classKey] = (state.mastered[q.classKey] || 0) + 1;
    state.mistakes = state.mistakes.filter((id) => id !== q.id);
  } else if (!state.mistakes.includes(q.id)) {
    playSound("wrong");
    registerStudyDay();
    state.mistakes.push(q.id);
  }
  saveState();
  if (session.index >= session.queue.length - 1) {
    screen = "result";
  } else {
    session.index += 1;
    session.revealed = false;
  }
  render();
}

function pickMatchCard(cardId) {
  if (!session || session.mode !== "match" || session.matched.includes(cardId)) return;
  const card = session.cards.find((item) => item.id === cardId);
  if (!card) return;
  if (!session.selectedCard) {
    session.selectedCard = cardId;
    render();
    return;
  }
  if (session.selectedCard === cardId) {
    session.selectedCard = null;
    render();
    return;
  }
  const first = session.cards.find((item) => item.id === session.selectedCard);
  session.attempts += 1;
  if (first && first.pairId === card.pairId && first.kind !== card.kind) {
    playSound("correct");
    registerStudyDay();
    session.matched.push(first.id, card.id);
    session.answers.push({ id: card.pairId, correct: true });
    state.answered += 1;
    state.correct += 1;
    state.xp += 12;
    state.mistakes = state.mistakes.filter((id) => id !== card.pairId);
    saveState();
    session.selectedCard = null;
    if (session.matched.length === session.cards.length) {
      screen = "result";
    }
    render();
    return;
  }
  session.selectedCard = cardId;
  render();
}

function renderHome() {
  const total = questions.length;
  const accuracy = pct(state.correct, state.answered);
  const mastered = Object.values(state.mastered).reduce((a, b) => a + b, 0);
  return `
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark logo-mark"><img src="./public/assets/logo1-shenqi.png" alt="" /></span>
        <div>
          <strong>ShenQi</strong>
          <span>Preparacion MINSAL de acupuntura</span>
        </div>
      </div>
      <nav class="nav">
        <button class="${screen === "home" ? "active" : ""}" data-screen="home">${icon("home")}Inicio</button>
        <button data-screen="library">${icon("book")}Textos</button>
        <button data-screen="stats">${icon("chart")}Progreso</button>
        <button data-action="toggle-mute">${icon(muted ? "pause" : "volume")}${muted ? "Silencio" : "Sonido"}</button>
      </nav>
    </header>

    <main class="shell">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Banco inicial: ${total} preguntas</p>
          <h1>Cambia el scroll por una pregunta.</h1>
          <p>Sesiones cortas para estudiar desde el celular: practica por clases, repasa errores y haz simulacros con vidas limitadas.</p>
          <div class="hero-actions">
            <button class="primary" data-action="start-daily">${icon("flame")}Modo diario</button>
            <button class="secondary" data-action="start-practice">${icon("play")}Practica rapida</button>
            <button class="secondary" data-action="start-exam">${icon("trophy")}Simulacro MINSAL</button>
          </div>
        </div>
        <div class="focus-panel">
          <div class="metric-ring" style="--value:${accuracy || 0}">
            <span>${accuracy || 0}%</span>
            <small>precision</small>
          </div>
          <div class="mini-metrics">
            <span>${icon("flame")} ${state.streak} dia</span>
            <span>${state.xp} XP</span>
            <span>${mastered} aciertos acumulados</span>
          </div>
        </div>
      </section>

      <section class="quick-grid">
        <button class="mode-tile game-tile speed" data-action="start-speed">
          ${icon("zap")}
          <strong>Contra reloj</strong>
          <span>60 segundos para decidir rapido.</span>
        </button>
        <button class="mode-tile game-tile cards" data-action="start-cards">
          ${icon("cards")}
          <strong>Tarjetas</strong>
          <span>Recuerda antes de revelar.</span>
        </button>
        <button class="mode-tile game-tile match" data-action="start-match">
          ${icon("link")}
          <strong>Memoria</strong>
          <span>Une pregunta con respuesta correcta.</span>
        </button>
        <button class="mode-tile" data-action="start-exam">
          ${icon("trophy")}
          <strong>Simulacro</strong>
          <span>65 preguntas mezcladas, 5 vidas.</span>
        </button>
        <button class="mode-tile daily" data-action="start-daily">
          ${icon("flame")}
          <strong>5 minutos</strong>
          <span>Bloque corto para microestudio en el telefono.</span>
        </button>
        <button class="mode-tile" data-action="start-mistakes" ${state.mistakes.length ? "" : "disabled"}>
          ${icon("x")}
          <strong>Errores</strong>
          <span>${state.mistakes.length} preguntas por recuperar.</span>
        </button>
        <button class="mode-tile" data-screen="library">
          ${icon("book")}
          <strong>Textos</strong>
          <span>${lessons.length} lecciones originales y resúmenes visuales.</span>
        </button>
      </section>

      <section class="section-head">
        <h2>Textos originales ShenQi</h2>
        <p>Lecturas breves creadas desde los documentos propios de la carpeta textos.</p>
      </section>

      <section class="lesson-strip">
        ${lessons.slice(0, 4).map(renderLessonCard).join("")}
      </section>

      <section class="section-head">
        <h2>Ruta de aprendizaje</h2>
        <p>Elige un modulo y resuelve bloques cortos, como una racha diaria.</p>
      </section>

      <section class="module-path">
        ${modules.map((mod, idx) => renderModule(mod, idx)).join("")}
      </section>
    </main>
    ${renderBottomNav("home")}
  `;
}

function renderModule(mod, idx) {
  const count = byModule(mod.id).length;
  const done = state.mastered[mod.id] || 0;
  const completion = Math.min(100, pct(done, Math.max(count, 1)));
  return `
    <article class="module-card" style="--accent:${mod.color}">
      <div class="module-index">${idx + 1}</div>
      <div class="module-icon">${icon(mod.icon)}</div>
      <div class="module-body">
        <h3>${mod.title}</h3>
        <p>${mod.subtitle}</p>
        <div class="progress"><span style="width:${completion}%"></span></div>
        <small>${count} preguntas disponibles · ${completion}% dominio</small>
      </div>
      <button data-action="open-module" data-module="${mod.id}" ${count ? "" : "disabled"}>${icon(mod.id === "11" ? "trophy" : "play")}</button>
    </article>
  `;
}

function renderModuleWorkspace() {
  const mod = moduleById(activeModule);
  const moduleLessons = lessonsByModule(activeModule);
  const count = byModule(activeModule).length;
  const done = state.mastered[activeModule] || 0;
  const completion = Math.min(100, pct(done, Math.max(count, 1)));
  return `
    <div class="study-app">
      <aside class="study-sidebar">
        <div class="sidebar-brand">
          <strong>ShenQi<span>.</span>app</strong>
          <small>by AzupaLab</small>
        </div>
        <p class="sidebar-label">Módulos de estudio</p>
        <nav class="sidebar-list">
          ${modules.map((item, index) => `
            <button class="${item.id === activeModule ? "active" : ""}" data-action="open-module" data-module="${item.id}">
              <span>${String(index + 1).padStart(2, "0")}</span>${item.title}
            </button>
          `).join("")}
        </nav>
      </aside>
      <section class="study-main">
        <header class="study-topbar">
          <button class="menu-chip" data-screen="home">${icon("home")}Inicio</button>
          <div>
            <strong>Módulo ${modules.indexOf(mod) + 1} — ${mod.title}</strong>
            <small>${count} preguntas · ${moduleLessons.length} textos · ${completion}% dominio</small>
          </div>
          ${audioPlaying ? `<button class="menu-chip audio-stop" data-action="stop-audio">${icon("pause")}Detener audio</button>` : ""}
          <button class="menu-chip" data-action="toggle-mute">${icon(muted ? "pause" : "volume")}${muted ? "Silencio" : "Sonido"}</button>
        </header>
        <nav class="tabs-bar">
          ${[
            ["teoria", "book", "Teoría"],
            ["trivia", "zap", "Preguntas"],
            ["flashcards", "cards", "Flashcards"],
            ["memorice", "link", "Memorice"],
            ["descargar", "volume", "Audio/PDF"],
          ].map(([id, ico, label]) => `
            <button class="tab-btn ${activeStudyTab === id ? "active" : ""}" data-study-tab="${id}">${icon(ico)}${label}</button>
          `).join("")}
        </nav>
        <main class="study-panel">
          ${activeStudyTab === "teoria" ? renderModuleTheory(mod, moduleLessons)
            : activeStudyTab === "trivia" ? renderModuleTrivia(mod, count)
            : activeStudyTab === "flashcards" ? renderModuleFlashcards(mod, count)
            : activeStudyTab === "memorice" ? renderModuleMemorice(mod, count)
            : renderModuleDownloads(mod, moduleLessons)}
        </main>
      </section>
    </div>
  `;
}

function renderModuleTheory(mod, moduleLessons) {
  const guide = MODULE_GUIDES[mod.id] || {
    hook: mod.subtitle,
    essentials: moduleLessons.slice(0, 4).map((lesson) => lesson.title),
    flow: ["Leer teoría", "Practicar", "Revisar errores", "Repetir"],
    table: [["Tema", "Clave"], [mod.title, mod.subtitle]],
    exam: ["Revisar preguntas del módulo", "Volver a las cápsulas débiles"],
  };
  const needsManual = moduleLessons.length === 0 || mod.id === "11";
  return `
    <section class="teoria-header">
      <h1>${mod.title}</h1>
      <p>${mod.subtitle}</p>
    </section>
    <section class="module-actions-row">
      ${audioPlaying ? `<button class="primary" data-action="stop-audio">${icon("pause")}Detener audio</button>` : `<button class="primary" data-action="listen-module" data-audio-module="${mod.id}">${icon("volume")}Escuchar resumen</button>`}
      <button class="secondary" data-action="download-module" data-download-module="${mod.id}">${icon("book")}Descargar PDF</button>
    </section>
    ${needsManual ? `
      <aside class="manual-alert">
        ${icon("book")}
        <div>
          <strong>Manual pendiente o incompleto</strong>
          <p>${manualNeedText(mod.id)}</p>
        </div>
      </aside>
    ` : ""}
    <section class="module-guide">
      <article class="guide-card guide-main">
        <span>${icon("book")}</span>
        <h2>Idea central</h2>
        <p>${guide.hook}</p>
      </article>
      <article class="guide-card guide-map">
        <span>${icon("route")}</span>
        <h2>Mapa para entender</h2>
        <div class="concept-flow">
          ${guide.flow.map((step, index) => `<div><b>${index + 1}</b><span>${step}</span></div>`).join("")}
        </div>
      </article>
      <article class="guide-card">
        <span>${icon("check")}</span>
        <h2>Lo esencial</h2>
        <ul class="study-list">${guide.essentials.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article class="guide-card">
        <span>${icon("table")}</span>
        <h2>Tabla de examen</h2>
        <table class="exam-table">
          ${guide.table.map((row, index) => `<tr>${row.map((cell) => index === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </table>
      </article>
      <article class="guide-card guide-main">
        <span>${icon("zap")}</span>
        <h2>Cómo lo preguntan</h2>
        <div class="exam-pills">${guide.exam.map((item) => `<span>${item}</span>`).join("")}</div>
      </article>
      ${moduleLessons.length ? `
        <article class="guide-card source-card">
          <span>${icon("book")}</span>
          <h2>Textos cargados</h2>
          <p>${moduleLessons.map((lesson) => lesson.title).slice(0, 4).join(" · ")}</p>
        </article>
      ` : ""}
    </section>
  `;
}

function manualNeedText(moduleId) {
  const notes = {
    "11": "El simulacro usa todo el banco de preguntas; no necesita manual clásico, pero conviene crear una guía de estrategia de examen y repaso de errores frecuentes.",
  };
  return notes[moduleId] || "Este módulo necesita un manual propio para que la teoría acompañe mejor a sus actividades.";
}

function renderModuleTrivia(mod, count) {
  return `
    <section class="activity-panel">
      <span class="activity-icon">${icon("zap")}</span>
      <h1>Preguntas del módulo</h1>
      <p>Entrena solo con preguntas de ${mod.title}. Ideal después de revisar la teoría.</p>
      <button class="primary" data-action="start-practice">${icon("play")}Comenzar trivia</button>
      <button class="secondary" data-action="start-speed">${icon("zap")}Contra reloj</button>
      <small>${count} preguntas disponibles en este módulo.</small>
    </section>
  `;
}

function renderModuleFlashcards(mod, count) {
  return `
    <section class="activity-panel flash-preview">
      <span class="activity-icon">${icon("cards")}</span>
      <h1>Flashcards</h1>
      <p>Recuerda la respuesta antes de revelarla. Útil para definiciones, normativa, puntos y señales de alarma.</p>
      <button class="primary" data-action="start-cards">${icon("cards")}Practicar tarjetas</button>
      <small>Usa el banco del módulo ${mod.title}: ${count} tarjetas posibles.</small>
    </section>
  `;
}

function renderModuleMemorice(mod, count) {
  return `
    <section class="activity-panel memory-preview">
      <span class="activity-icon">${icon("link")}</span>
      <h1>Memorice</h1>
      <p>Une pregunta y respuesta correcta para reforzar asociaciones rápidas antes del examen.</p>
      <button class="primary" data-action="start-match">${icon("link")}Jugar memorice</button>
      <small>Tablero generado desde preguntas de ${mod.title}.</small>
    </section>
  `;
}

function renderModuleDownloads(mod, moduleLessons) {
  return `
    <section class="activity-panel download-panel">
      <span class="activity-icon">${icon("volume")}</span>
      <h1>Audio y PDF</h1>
      <p>Escucha el resumen del módulo o genera una versión imprimible para guardar como PDF.</p>
      <button class="primary" data-action="listen-module" data-audio-module="${mod.id}">${icon("volume")}Escuchar teoría</button>
      <button class="secondary" data-action="stop-audio">${icon("pause")}Detener audio</button>
      <button class="secondary" data-action="download-module" data-download-module="${mod.id}">${icon("book")}Guardar como PDF</button>
      <small>${moduleLessons.length ? `${moduleLessons.length} textos incluidos.` : "Texto completo pendiente de carga."}</small>
    </section>
  `;
}

function renderLessonCard(lesson) {
  return `
    <article class="lesson-card">
      <span>${lesson.module}</span>
      <h3>${lesson.title}</h3>
      <p>${shortText(lesson.summary, 150)}</p>
      <small>${lesson.readingMinutes} min · ${lesson.capsules.length} cápsulas</small>
      <button class="secondary" data-lesson="${lesson.id}">${icon("book")}Leer</button>
    </article>
  `;
}

function sessionLabel() {
  if (!session) return "";
  if (session.mode === "exam") return "Simulacro MINSAL";
  if (session.mode === "mistakes") return "Repaso de errores";
  if (session.isReview) return "Repaso de errores del módulo";
  if (session.mode === "daily") return `Modo diario · Nivel ${session.levelNumber || 1}`;
  if (session.mode === "speed") return `Contra reloj · Nivel ${session.levelNumber || 1}`;
  return `Nivel ${session.levelNumber || 1}`;
}

function renderQuiz() {
  const q = currentQuestion();
  if (!q) return renderEmpty("No hay preguntas disponibles para este modo.");
  const progress = pct(session.index + 1, session.queue.length);
  const secondsLeft = session.deadline ? Math.max(0, Math.ceil((session.deadline - Date.now()) / 1000)) : null;
  return `
    <header class="quizbar">
      <button class="icon-button" data-action="exit">${icon("x")}</button>
      <div class="quiz-progress"><span style="width:${progress}%"></span></div>
      <div class="lives">${secondsLeft !== null ? `${secondsLeft}s` : "♥".repeat(Math.max(0, session.lives))}</div>
    </header>
    <main class="quiz-shell">
      <section class="question-card">
        <div class="question-meta">
          <span>${sessionLabel()} · ${q.module}</span>
          <span>${session.index + 1}/${session.queue.length}</span>
        </div>
        <h2>${q.prompt}</h2>
        <div class="options">
          ${q.options.map((option, index) => {
            const chosen = session.selected === index;
            const correct = q.answerIndex === index;
            const status = session.checked
              ? correct ? "correct" : chosen ? "wrong" : ""
              : "";
            return `<button class="option ${chosen ? "chosen" : ""} ${status}" data-answer="${index}">
              <span>${String.fromCharCode(65 + index)}</span>${option}
            </button>`;
          }).join("")}
        </div>
      </section>
      ${session.checked ? `
        <aside class="feedback ${session.selected === q.answerIndex ? "ok" : "bad"}">
          <strong>${session.selected === q.answerIndex ? "Correcto" : "Revisemos esta"}</strong>
          <p>${q.explanation}</p>
          <button class="primary" data-action="next">${session.index >= session.queue.length - 1 || session.lives <= 0 ? "Ver resultado" : "Continuar"}</button>
        </aside>
      ` : ""}
    </main>
  `;
}

function renderGame() {
  if (!session) return renderEmpty("No hay juego activo.");
  if (session.mode === "cards") return renderCardsGame();
  if (session.mode === "match") return renderMatchGame();
  return renderEmpty("Juego no disponible.");
}

function renderCardsGame() {
  const q = session.queue[session.index];
  if (!q) return renderEmpty("No hay tarjetas disponibles.");
  return `
    <header class="quizbar">
      <button class="icon-button" data-action="exit">${icon("x")}</button>
      <div class="quiz-progress"><span style="width:${pct(session.index + 1, session.queue.length)}%"></span></div>
      <div class="lives">${session.index + 1}/${session.queue.length}</div>
    </header>
    <main class="game-shell">
      <section class="flashcard ${session.revealed ? "revealed" : ""}">
        <p class="eyebrow">${q.module}</p>
        <h2>${q.prompt}</h2>
        ${session.revealed ? `
          <div class="card-answer">
            <strong>${q.options[q.answerIndex]}</strong>
            <p>${q.explanation}</p>
          </div>
          <div class="result-actions">
            <button class="secondary" data-action="card-miss">${icon("x")}Me costo</button>
            <button class="primary" data-action="card-known">${icon("check")}La sabia</button>
          </div>
        ` : `
          <button class="primary reveal-button" data-action="reveal-card">${icon("cards")}Revelar respuesta</button>
        `}
      </section>
    </main>
  `;
}

function renderMatchGame() {
  const completed = session.matched.length === session.cards.length;
  return `
    <header class="quizbar">
      <button class="icon-button" data-action="exit">${icon("x")}</button>
      <div class="quiz-progress"><span style="width:${pct(session.matched.length, session.cards.length)}%"></span></div>
      <div class="lives">${session.attempts} intentos</div>
    </header>
    <main class="game-shell">
      <section class="section-head compact">
        <h1>Memoria ShenQi</h1>
        <p>Elige una pregunta y luego su respuesta correcta.</p>
      </section>
      <section class="match-board">
        ${session.cards.map((card) => {
          const matched = session.matched.includes(card.id);
          const selected = session.selectedCard === card.id;
          return `<button class="match-card ${card.kind} ${matched ? "matched" : ""} ${selected ? "selected" : ""}" data-match="${card.id}" ${matched || completed ? "disabled" : ""}>
            <span>${card.kind}</span>
            <strong>${card.text}</strong>
          </button>`;
        }).join("")}
      </section>
      <div class="game-actions">
        <button class="secondary" data-action="start-match">${icon("shuffle")}Nuevo tablero</button>
      </div>
    </main>
  `;
}

function renderResult() {
  const correct = session.answers.filter((a) => a.correct).length;
  const total = session.answers.length;
  const score = pct(correct, total);
  const moduleTotal = byModule(session.moduleId).length;
  const moduleDone = session.moduleId ? (progressForModule(session.moduleId).length || 0) : 0;
  const pendingMistakes = session.moduleId
    ? byModule(session.moduleId).filter((q) => state.mistakes.includes(q.id)).length
    : state.mistakes.length;
  const resultTitle = session.mode === "exam" ? "Simulacro terminado"
    : session.mode === "speed" ? "Contra reloj terminado"
    : session.mode === "cards" ? "Tarjetas terminadas"
    : session.mode === "match" ? "Memoria completada"
    : session.isReview ? "Repaso terminado"
    : `Nivel ${session.levelNumber || 1} terminado`;
  const nextLabel = session.mode === "exam" || session.mode === "mistakes" || session.isReview
    ? "Repetir errores"
    : "Siguiente nivel";
  return `
    <main class="result-shell">
      <section class="result-card">
        <div class="result-badge">${score >= 70 ? icon("trophy") : icon("book")}</div>
        <p class="eyebrow">${resultTitle}</p>
        <h1>${score}% de precision</h1>
        <p>${correct} correctas de ${total}. ${score >= 70 ? "Buen ritmo: sigue consolidando." : "Conviene repetir los errores antes del siguiente bloque."}</p>
        ${session.mode !== "exam" && session.mode !== "mistakes" ? `
          <p class="result-note">${moduleDone}/${moduleTotal} preguntas superadas en este módulo. ${pendingMistakes ? `${pendingMistakes} quedan para repaso de errores.` : "Sin errores pendientes en este módulo."}</p>
        ` : ""}
        <div class="result-actions">
          <button class="primary" data-action="retry">${icon("play")}${nextLabel}</button>
          <button class="secondary" data-screen="home">${icon("home")}Volver al inicio</button>
        </div>
      </section>
    </main>
  `;
}

function renderLibrary() {
  return `
    ${renderTopbar("library")}
    <main class="shell">
      <section class="section-head">
        <h1>Textos originales</h1>
        <p>Base principal de estudio creada desde la carpeta textos. Así evitamos depender de material con derechos de autor de terceros.</p>
      </section>
      <section class="lesson-grid">
        ${lessons.map(renderLessonCard).join("")}
      </section>
      <section class="section-head">
        <h2>Imágenes resumen</h2>
        <p>Material visual agregado desde la carpeta imagenes resumenes.</p>
      </section>
      <section class="summary-gallery">
        ${summaryImages.map((image) => `
          <article class="summary-image-card">
            <img src="${image.src}" alt="${image.title}" />
            <div>
              <span>${image.tag}</span>
              <h3>${image.title}</h3>
            </div>
          </article>
        `).join("")}
      </section>
    </main>
    ${renderBottomNav("library")}
  `;
}

function visualKindFor(lesson, capsule, index) {
  const text = `${lesson.title} ${capsule.title} ${capsule.paragraphs.join(" ")}`.toLowerCase();
  if (text.includes("canal") || text.includes("colateral") || text.includes("meridiano")) return index % 2 ? "river" : "flow";
  if (text.includes("punto") || text.includes("selección") || text.includes("seleccion")) return "table";
  if (text.includes("diagnóstico") || text.includes("diagnostico") || text.includes("pulso") || text.includes("lengua")) return "diagnostic";
  if (text.includes("zang") || text.includes("qi") || text.includes("sangre") || text.includes("fluido")) return "systems";
  if (text.includes("yin") || text.includes("yang") || text.includes("wu xing") || text.includes("cinco")) return "balance";
  if (text.includes("moxa") || text.includes("ventosa") || text.includes("auriculo")) return "technique";
  return index % 3 === 0 ? "flow" : index % 3 === 1 ? "table" : "concept";
}

function renderLessonMap(lesson) {
  const capsuleNames = lesson.capsules.slice(0, 5).map((capsule) => shortText(capsule.title, 34));
  return `
    <section class="lesson-map">
      <div class="map-card map-main">
        ${icon("route")}
        <strong>Ruta mental</strong>
        <p>${lesson.module}</p>
      </div>
      <div class="map-flow">
        ${capsuleNames.map((name, index) => `
          <div class="map-step">
            <span>${index + 1}</span>
            <p>${name}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCapsuleVisual(capsule, index, lesson) {
  const kind = visualKindFor(lesson, capsule, index);
  const words = capsule.title.split(/\s+/).filter((word) => word.length > 4).slice(0, 4);
  if (kind === "flow") {
    return `
      <aside class="visual-aid flow-aid">
        <div>${icon("route")}<strong>Flujo de estudio</strong></div>
        <ol>
          <li>Ubica la idea central</li>
          <li>Relaciona canal, órgano o función</li>
          <li>Conecta con una pregunta MINSAL</li>
        </ol>
      </aside>
    `;
  }
  if (kind === "river") {
    return `
      <aside class="visual-aid river-aid">
        <div class="river-line"><span>Qi</span><span>Xue</span><span>Jin Ye</span></div>
        <p>Piensa los canales como una red: tronco principal, ramas, superficie y destino clínico.</p>
      </aside>
    `;
  }
  if (kind === "table") {
    return `
      <aside class="visual-aid table-aid">
        <div>${icon("table")}<strong>Tabla rápida</strong></div>
        <table>
          <tr><th>Pregunta</th><th>Qué buscar</th></tr>
          <tr><td>¿Qué estructura?</td><td>Canal, punto o categoría</td></tr>
          <tr><td>¿Para qué sirve?</td><td>Función clínica principal</td></tr>
        </table>
      </aside>
    `;
  }
  if (kind === "diagnostic") {
    return `
      <aside class="visual-aid diagnostic-aid">
        <div>${icon("eye")}<strong>Cuatro puertas</strong></div>
        <div class="pill-grid"><span>Observa</span><span>Escucha</span><span>Pregunta</span><span>Palpa</span></div>
      </aside>
    `;
  }
  if (kind === "systems") {
    return `
      <aside class="visual-aid systems-aid">
        <div class="orbit"><span>Zang-Fu</span><span>Qi</span><span>Xue</span><span>Fluidos</span></div>
      </aside>
    `;
  }
  if (kind === "balance") {
    return `
      <aside class="visual-aid balance-aid">
        <div><span>Yin</span><i></i><span>Yang</span></div>
        <p>Lee cada concepto como relación dinámica, no como lista aislada.</p>
      </aside>
    `;
  }
  if (kind === "technique") {
    return `
      <aside class="visual-aid technique-aid">
        <div>${icon("needle")}<strong>Técnica</strong></div>
        <p>Recuerda: indicación, contraindicación, aplicación segura y objetivo terapéutico.</p>
      </aside>
    `;
  }
  return `
    <aside class="visual-aid concept-aid">
      <div>${icon("cards")}<strong>Palabras clave</strong></div>
      <div class="pill-grid">${words.map((word) => `<span>${word}</span>`).join("")}</div>
    </aside>
  `;
}

function renderLessonDetail() {
  const lesson = lessons.find((item) => item.id === activeLessonId) || lessons[0];
  if (!lesson) return renderEmpty("No hay textos originales disponibles.");
  return `
    ${renderTopbar("library")}
    <main class="lesson-reader">
      <button class="secondary back-button" data-screen="library">${icon("home")}Volver a textos</button>
      <article class="reader-hero">
        <p class="eyebrow">${lesson.module} · ${lesson.readingMinutes} min</p>
        <h1>${lesson.title}</h1>
        <p>${lesson.summary}</p>
        <div class="reader-actions">
          <button class="primary" data-action="listen-lesson" data-audio-lesson="${lesson.id}">${icon("volume")}Escuchar lección</button>
          <button class="secondary" data-action="stop-audio">${icon("pause")}Detener audio</button>
        </div>
        <small>Fuente original: ${lesson.source}</small>
      </article>
      ${renderLessonMap(lesson)}
      <section class="capsule-list">
        ${lesson.capsules.map((capsule, index) => `
          <article class="capsule-card">
            <div class="module-index">${index + 1}</div>
            <div>
              <h2>${capsule.title}</h2>
              ${renderCapsuleVisual(capsule, index, lesson)}
              ${capsule.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
          </article>
        `).join("")}
      </section>
    </main>
    ${renderBottomNav("library")}
  `;
}

function renderStats() {
  const rows = modules.map((mod) => {
    const count = byModule(mod.id).length;
    const done = state.mastered[mod.id] || 0;
    return `<tr><td>${mod.title}</td><td>${count}</td><td>${done}</td><td>${pct(done, Math.max(count, 1))}%</td></tr>`;
  }).join("");
  return `
    ${renderTopbar("stats")}
    <main class="shell">
      <section class="section-head">
        <h1>Progreso</h1>
        <p>${state.answered} respuestas registradas · ${pct(state.correct, state.answered)}% precision global · ${state.mistakes.length} errores pendientes.</p>
      </section>
      <table class="stats-table">
        <thead><tr><th>Modulo</th><th>Preguntas</th><th>Aciertos</th><th>Dominio</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <button class="danger" data-action="reset">Reiniciar progreso</button>
    </main>
    ${renderBottomNav("stats")}
  `;
}

function renderTopbar(active) {
  return `
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark logo-mark"><img src="./public/assets/logo1-shenqi.png" alt="" /></span>
        <div><strong>ShenQi</strong><span>Preparacion MINSAL</span></div>
      </div>
      <nav class="nav">
        <button class="${active === "home" ? "active" : ""}" data-screen="home">${icon("home")}Inicio</button>
        <button class="${active === "library" ? "active" : ""}" data-screen="library">${icon("book")}Textos</button>
        <button class="${active === "stats" ? "active" : ""}" data-screen="stats">${icon("chart")}Progreso</button>
        <span class="source-badge ${questionSource === "supabase" ? "online" : ""}">${questionSource === "supabase" ? "Supabase" : "Offline"}</span>
        <button data-action="toggle-mute">${icon(muted ? "pause" : "volume")}${muted ? "Silencio" : "Sonido"}</button>
      </nav>
    </header>
  `;
}

function renderBottomNav(active) {
  return `
    <nav class="bottom-nav">
      <button class="${active === "home" ? "active" : ""}" data-screen="home">${icon("home")}<span>Inicio</span></button>
      <button data-action="start-daily">${icon("flame")}<span>Diario</span></button>
      <button class="${active === "library" ? "active" : ""}" data-screen="library">${icon("book")}<span>Textos</span></button>
      <button class="${active === "stats" ? "active" : ""}" data-screen="stats">${icon("chart")}<span>Progreso</span></button>
    </nav>
  `;
}

function renderEmpty(message) {
  return `${renderTopbar("home")}<main class="shell"><section class="result-card"><h1>${message}</h1><button class="primary" data-screen="home">Volver</button></section></main>`;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = screen === "quiz" ? renderQuiz()
    : screen === "result" ? renderResult()
    : screen === "game" ? renderGame()
    : screen === "module" ? renderModuleWorkspace()
    : screen === "lesson" ? renderLessonDetail()
    : screen === "library" ? renderLibrary()
    : screen === "stats" ? renderStats()
    : renderHome();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  const nextScreen = target.dataset.screen;
  const action = target.dataset.action;
  const answerIndex = target.dataset.answer;
  const matchId = target.dataset.match;
  const lessonId = target.dataset.lesson;
  const audioLessonId = target.dataset.audioLesson;
  const audioModuleId = target.dataset.audioModule;
  const downloadModuleId = target.dataset.downloadModule;
  const studyTab = target.dataset.studyTab;
  if (target.disabled) return;
  if (studyTab) {
    activeStudyTab = studyTab;
    render();
    return;
  }
  if (audioModuleId) {
    speakModule(audioModuleId);
    return;
  }
  if (downloadModuleId) {
    printModulePdf(downloadModuleId);
    return;
  }
  if (audioLessonId) {
    speakLesson(audioLessonId);
    return;
  }
  if (lessonId) {
    activeLessonId = lessonId;
    clearTimer();
    screen = "lesson";
    render();
    return;
  }
  if (nextScreen) {
    clearTimer();
    stopLessonAudio();
    screen = nextScreen;
    render();
    return;
  }
  if (answerIndex !== undefined) answer(Number(answerIndex));
  if (matchId) pickMatchCard(matchId);
  if (action === "start-daily") startSession("daily", activeModule);
  if (action === "start-practice") startSession("practice", activeModule);
  if (action === "start-exam") startSession("exam");
  if (action === "start-speed") startSession("speed", activeModule);
  if (action === "start-mistakes") startSession("mistakes");
  if (action === "start-cards") startGame("cards", activeModule);
  if (action === "start-match") startGame("match", activeModule);
  if (action === "reveal-card") revealCard();
  if (action === "card-known") rateCard(true);
  if (action === "card-miss") rateCard(false);
  if (action === "stop-audio") {
    stopLessonAudio();
    render();
  }
  if (action === "toggle-mute") {
    muted = !muted;
    render();
  }
  if (action === "open-module") {
    activeModule = target.dataset.module || activeModule;
    activeStudyTab = "teoria";
    clearTimer();
    stopLessonAudio();
    screen = "module";
    render();
  }
  if (action === "module") {
    activeModule = target.dataset.module;
    activeStudyTab = "teoria";
    screen = "module";
    render();
  }
  if (action === "next") nextQuestion();
  if (action === "exit") {
    clearTimer();
    stopLessonAudio();
    screen = "home";
    render();
  }
  if (action === "retry") {
    if (session.mode === "cards" || session.mode === "match") startGame(session.mode, session.moduleId);
    else startSession(session.mode, session.moduleId);
  }
  if (action === "reset") {
    localStorage.removeItem(STORE_KEY);
    state = loadState();
    render();
  }
});

async function boot() {
  try {
    await loadSupabaseQuestions();
  } catch (error) {
    console.warn("No se pudo cargar Supabase, usando banco local.", error);
    questions = [...localQuestions];
    questionSource = "local";
  }
  render();
}

boot();

export interface Job {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  bullets: string[];
  tags: string[];
  current?: boolean;
}

export const jobs: Job[] = [
  {
    period: '2024 – Present',
    role: 'Full Stack Software Engineer',
    company: 'FlxPoint',
    companyUrl: 'https://flxpoint.com/',
    location: 'Jacksonville, FL, USA · Remote',
    current: true,
    bullets: [
      'Designed, developed, and maintained custom eCommerce solutions tailored to client requirements on a multi-tenant SaaS platform.',
      'Engineered full-stack solutions using Vue.js + TypeScript for front-end, Java (Spring Boot, jOOQ) for back-end, AWS for cloud automation, and Flyway/PostgreSQL for data management.',
      'Developed custom machine learning models to streamline customer product categorization and publishing workflows.',
      'Built an in-app chatbot using RAG and LLM APIs, significantly reducing customer support and onboarding time.',
      'Delivered customer-facing REST APIs for advanced programmatic platform usage.',
    ],
    tags: ['Vue.js', 'TypeScript', 'Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'RAG', 'LLMs', 'Docker'],
  },
  {
    period: '2024',
    role: 'Software Engineer II',
    company: 'Libra Energia',
    companyUrl: 'https://www.libraenergia.com.br/',
    location: 'São Paulo, SP, Brazil',
    bullets: [
      'Developed and maintained a portfolio of internal applications: websites, risk curve generators, and contract pricing tools.',
      'Led containerization of all internal applications, improving development time, deployment velocity, and scalability.',
      'Engineered hydric prediction models and other data science tools to support energy trading operations.',
      'Managed the full software development lifecycle from requirements gathering to production deployment.',
    ],
    tags: ['Python', 'Django', 'Vue.js', 'Docker', 'PostgreSQL', 'Data Science', 'Machine Learning'],
  },
  {
    period: '2022 – 2024',
    role: 'Software Engineer',
    company: 'Giant Steps Capital',
    companyUrl: 'https://gscap.com.br/',
    location: 'São Paulo, SP, Brazil',
    bullets: [
      'Built post-trade systems for Latin America\'s largest quantitative asset manager, including web tooling, REST APIs, data conciliation pipelines, and automated billing routines.',
      'Engineered worldwide stock exchange messaging systems and critical data engineering pipelines handling billions in transactions.',
      'Utilized Python (Django, Flask, DRF, Graphene), Apache Kafka, Airflow, PostgreSQL, and AWS services.',
      'Built front-end management interfaces with TypeScript, Vue.js, and Vuetify consuming from internal APIs.',
    ],
    tags: ['Python', 'Django', 'Flask', 'Vue.js', 'Kafka', 'Airflow', 'PostgreSQL', 'AWS', 'GraphQL'],
  },
  {
    period: '2022',
    role: 'Junior Full Stack Developer',
    company: 'scandiweb',
    companyUrl: 'https://scandiweb.com/',
    location: 'Riga, Latvia · Remote',
    bullets: [
      'Developed high-performance eCommerce marketplaces using Magento, Akeneo PIM, and ScandiPWA.',
      'Engineered comprehensive eCommerce solutions from back-end infrastructure to React front-end interfaces.',
      'Focused on scalable architecture and seamless user experience for evolving client requirements.',
    ],
    tags: ['PHP', 'Magento', 'React', 'ScandiPWA', 'Akeneo'],
  },
];

function parseYears(period: string, current: boolean | undefined, currentYear: number): { start: number; end: number } {
  const years = period.match(/\d{4}/g)?.map(Number) ?? [];
  const start = years[0] ?? currentYear;
  const end = current ? currentYear : years[1] ?? years[0] ?? currentYear;
  return { start, end };
}

function extractCountry(location: string): string {
  const primary = location.split('·')[0]?.trim() ?? location;
  const parts = primary.split(',').map((part) => part.trim()).filter(Boolean);
  return parts.at(-1) ?? primary;
}

export function getCareerStats(currentYear = new Date().getFullYear()) {
  const ranges = jobs.map((job) => parseYears(job.period, job.current, currentYear));
  const earliestYear = Math.min(...ranges.map((range) => range.start));
  const latestYear = Math.max(...ranges.map((range) => range.end));
  const yearsExperience = Math.max(1, latestYear - earliestYear);
  const companies = new Set(jobs.map((job) => job.company)).size;
  const countries = new Set(jobs.map((job) => extractCountry(job.location))).size;

  return {
    yearsExperience,
    companies,
    countries,
  };
}

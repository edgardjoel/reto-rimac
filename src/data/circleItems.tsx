import {
  AddUserLightIcon,
  CheckIcon,
  Circle,
  GoBackIcon,
  LineIcon,
  ProtectionLightIcon,
  TextWithBackground,
} from '@components/Atoms';
import { PlanCardProps } from '@components/Molecules/PlanCard/PlanCard';
import { QuoteOptionProps } from '@components/Molecules/QuoteOption/QuoteOption';
import { CircleWithLabelContainerProps } from '@components/Organisms/CircleWithLabelContainer/CircleWithLabelContainer';
import { IPlans } from '@interfaces/Plans';
import { StatePlanType } from '@services/plansServices';

const size = '24px';
export const circleItems: CircleWithLabelContainerProps['items'] = [
  {
    size,
    border: '',
    background: '#4F4FFF',
    textColor: '#FFFFFF',
    number: 1,
    label: 'Planes y coberturas',
    labelColor: '#141938',
    fontWeight: '700',
    lineIcon: <LineIcon />,
  },
  {
    size,
    border: '1px solid #7981B2',
    background: '',
    textColor: '#7981B2',
    labelColor: '#7981B2',
    number: 2,
    label: 'Resumen',
    fontWeight: 'normal',
    lineIcon: null,
  },
];

export const GoBackIconLabel = {
  size: '',
  fontSize: '18px',
  border: '',
  background: '',
  textColor: '',

  label: 'Volver',
  labelColor: '#4F4FFF',
  fontWeight: '700',
  icon: <GoBackIcon />,
  lineIcon: null,
};

export const GoBackIconLabelMobile = {
  size: '',
  fontSize: '',
  border: '',
  background: '',
  textColor: '#A9AFD9',
  label: '',
  labelColor: '',
  fontWeight: '700',
  icon: <GoBackIcon color="#A9AFD9" />,
  lineIcon: null,
};

//Seccion de planes

const propsSideIcon = {
  size: '24px',
  border: ' 1px solid #7981B2',
  background: 'transparent',
  textColor: '#7981B2',
};
const propsSelectableIcon = {
  size: '24px',
  border: ' ',
  background: '',
  textColor: '',
  icon: <CheckIcon />,
};

export const quoteOptionsData: QuoteOptionProps[] = [
  {
    unselectedIcon: <Circle {...propsSideIcon} />,
    selectableIcon: <Circle {...propsSelectableIcon} />,
    sideIcon: <ProtectionLightIcon />,
    selectableIconPosition: 'right',
    iconPosition: 'left',
    title: 'Para mi',
    description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
    active: false,
    id: StatePlanType.PERSONAL,
  },
  {
    unselectedIcon: <Circle {...propsSideIcon} />,
    selectableIcon: <Circle {...propsSelectableIcon} />,
    sideIcon: <AddUserLightIcon />, // Cambia por otro icono
    selectableIconPosition: 'right',
    iconPosition: 'left',
    title: 'Para alguien más',
    description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
    active: false,
    id: StatePlanType.OTHER,
  },
];

export const myPlan: PlanCardProps = {
  title: 'Plan Básico',
  subtitle: 'Costo del plan',
  cost: '$19.99/mes',
  features: [
    { description: 'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.' },
    { description: 'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.' },
    { description: 'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.' },
  ],
  label: <TextWithBackground text={'Plan recomendado'} background="#7DF0BA" />,

  icon: <ProtectionLightIcon />,
  iconPosition: 'right',
};

export const highlightKeywords: string[] = [
  'Médico general a domicilio',
  'Videoconsulta',
  'Indemnización',
  'Consultas en clínica',
  'Medicinas y exámenes',
  'más de 200 clínicas del país.',
  'Un Chequeo preventivo general',
  'Vacunas',
  'Incluye todos los beneficios del Plan en Casa.',
];

export const dataPlans: IPlans[] = [
  {
    name: 'Plan en Casa',
    price: 39,
    description: [
      'Médico general a domicilio por S/20 y medicinas cubiertas al 100%.',
      'Videoconsulta y orientación telefónica  al 100% en medicina general + pediatría.',
      'Indemnización de S/300 en caso de hospitalización por más de un día.',
    ],
    age: 60,
  },
  {
    name: 'Plan en Casa y Clínica',
    price: 99,
    description: [
      'Consultas en clínica para cualquier especialidad.',
      'Medicinas y exámenes derivados cubiertos al 80%.',
      'Atención médica en más de 200 clínicas del país.',
    ],
    age: 70,
  },
  {
    name: 'Plan en Casa + Bienestar',
    price: 70,
    description: [
      'Videoconsulta con especialistas de psicología y nutrición.',
      'Acceso a videos y recursos sobre bienestar.',
      'Incluye todos los beneficios del Plan en Casa.',
    ],
    age: 25,
  },
  {
    name: 'Plan en Casa + Chequeo ',
    price: 49,
    description: [
      'Un Chequeo preventivo general de manera presencial o virtual.',
      'Acceso a Vacunas en el Programa del MINSA en centros privados.',
      'Incluye todos los beneficios del Plan en Casa.',
    ],
    age: 90,
  },
  {
    name: 'Plan en Casa + Fitness',
    price: 45,
    description: [
      'Descuentos en más de 50 locales de gimnasio.',
      'Beneficios exclusivos en alimentos nutricionales y complementos.',
      'Incluye todos los beneficios del Plan en Casa.',
    ],
    age: 30,
  },
];

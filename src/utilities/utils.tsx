import {
  HomeLightIcon,
  HospitalLightIcon,
  HouseIcon,
  LaptopSolidIcon,
  PersonIcon,
  TextWithBackground,
} from '@components/Atoms';
import { PlanCardProps } from '@components/Molecules/PlanCard/PlanCard';
import { UserInfo } from '@interfaces/localStorage';
import { IPlans } from '@interfaces/Plans';

export const sanitizeNumericInput = (input: string, maxLength: number) => {
  const sanitizedValue = input.replace(/\D/g, ''); // Elimina todo lo que no sea número
  return sanitizedValue.slice(0, maxLength); // Limita la longitud
};
export const currentYear = () => new Date().getFullYear();

export const calculateAge = (dateOfBirth: string) => {
  // Parsear la fecha de nacimiento
  const [day, month, year] = dateOfBirth.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day); // Mes - 1 porque los meses en JavaScript son base 0

  // Obtener la fecha actual
  const today = new Date();

  // Calcular la edad inicial
  let age = today.getFullYear() - birthDate.getFullYear();

  // Ajustar la edad si el cumpleaños aún no ha pasado este año
  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!isBirthdayPassed) {
    age--;
  }

  return age;
};

export const priceMin = (data: IPlans[]) => {
  return data.reduce((acc, { price }) => {
    return Math.min(acc, price);
  }, Infinity);
};

export const descriptionContainsKeywords = (
  descriptionList: IPlans['description'],
  keywords: string[],
) => {
  return descriptionList.some((description) =>
    keywords.some((keyword) => description.toUpperCase().includes(keyword.toUpperCase())),
  );
};

export const transformAndLabelPlans = (
  data: IPlans[],
  happyBirthday: string = '02-04-1990',
): PlanCardProps[] => {
  const happyBardey = calculateAge(happyBirthday);
  return data
    .filter((e) => e.age > happyBardey)
    .map(({ name, price, description, discount = '' }) => ({
      price: price,
      discount: Number(discount),
      title: name,
      subtitle: 'Costo del plan',
      originalCostStr: discount ? `$${price} antes` : '',
      cost: discount ? `$${discount}/mes` : `$${price}/mes`,
      features: description.map((info) => ({
        description: info,
        iconBineta: descriptionContainsKeywords([info], ['Médico']) ? (
          <PersonIcon />
        ) : descriptionContainsKeywords([info], ['telefónica']) ? (
          <LaptopSolidIcon />
        ) : descriptionContainsKeywords([info], ['hospitalización']) ? (
          <HouseIcon />
        ) : (
          <>●</>
        ),
      })),
      label:
        99 === price ? (
          <TextWithBackground text={'Plan recomendado'} background="#7DF0BA" />
        ) : (
          <TextWithBackground text={''} background="#fff" />
        ),
      labelColor: '#fff',
      labelBackgroundColor: '#28a745',
      icon: descriptionContainsKeywords(description, ['domicilio', 'casa']) ? (
        <HomeLightIcon />
      ) : (
        <HospitalLightIcon />
      ),
    }));
};

export const highlightKeywordsSearch = (text: string, keywords: string[]): JSX.Element[] => {
  return text
    .split(new RegExp(`(${keywords.join('|')})`, 'gi')) // Divide el texto usando las palabras clave
    .map((part, index) =>
      keywords.includes(part) ? (
        <strong key={'strong' + index}>{part}</strong>
      ) : part ? (
        <span key={'span' + index}>{part}</span>
      ) : (
        <span key={'span2' + index}></span>
      ),
    );
};

export const setUserInfo = (key: string, userInfo: UserInfo): void => {
  localStorage.setItem(key, JSON.stringify(userInfo));
};

export const getUserInfo = (key: string): UserInfo | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as UserInfo) : null;
};

export const updateUserInfo = (key: string, updates: Partial<UserInfo>): void => {
  const existingItem = getUserInfo(key);

  if (existingItem) {
    const updatedItem = { ...existingItem, ...updates };
    setUserInfo(key, updatedItem);
  } else {
    console.warn(`No existe ningún elemento en el localStorage con la clave: ${key}`);
  }
};

export const removeUserInfo = (key: string): void => {
  localStorage.removeItem(key);
};

export const percentage = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => (currentStep / totalSteps) * 100;

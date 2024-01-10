import { Separator } from "@entities/Separator/ui";
import { ServiceCard } from "@entities/ServiceCard/ui";

import styles from "./styles.module.scss";

const firstCardData = [
  { service: "Представление ваших интересов на рынке" },
  { service: "Заключение сделок на товарных биржах" },
  { service: "Возможность участия иностранных компаний" },
  { service: "Полное юридическое сопровождение сделки" },
  {
    service:
      "Консультации по вопросам законодательства в области биржевой торговли",
  },
];

const secondCardData = [
  { service: "Поиск потенциальных поставщиков ваших товаров" },
  { service: "Прозрачность процесса закупок и экономия закупочных средств" },
];

const thirdCardData = [
  {
    service:
      "Своевременное оповещение о публикации интересующих товаров в проводимых, и идущих сделках",
  },
  { service: "Честная конкуренция оппонентов" },
];

export const ServicesScreen = () => {
  return (
    <div className={`${styles.bg_image} w-full  bg-custom-black m-auto mt-16`}>
      <section className="container m-auto pt-10">
        <Separator text="Услуги" />
        <h3 className={styles.heading}>Наши Услуги</h3>
        <p className="paragraph white w-[80%] mt-4">
          Компания «CITY BROKER», предоставляет широкий спектр услуг в
          брокерской деятельности.
        </p>
        <ServiceCard
          heading="Для Клиентов"
          marginTop="mt-10"
          services={firstCardData}
        />
        <ServiceCard
          heading="Для заказчиков"
          marginTop="mt-10"
          services={secondCardData}
        />
        <ServiceCard
          heading="Для Клиентов"
          marginTop="mt-10 mb-16"
          services={thirdCardData}
        />
      </section>
    </div>
  );
};

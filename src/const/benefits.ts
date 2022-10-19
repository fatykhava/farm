import cashIcon from '../assets/cash.svg';
import shopIcon from '../assets/shop.svg';
import truckIcon from '../assets/truck.svg';
import saladIcon from '../assets/salad.svg';
import listIcon from '../assets/list.svg';
import treeIcon from '../assets/tree.svg';


const BENEFITS = [
    {
        id: 1,
        title: 'Отборные продукты',
        descriptions: 'Продукты просматриваем и отбираем вручную',
        icon: saladIcon,
    },
    {
        id: 2,
        title: 'Доставка',
        descriptions: 'Осуществляем доставку по Гомельской области',
        icon: truckIcon,
    },
    {
        id: 3,
        title: 'Без ГМО',
        descriptions: 'Натуральные продукты с фермы',
        icon: treeIcon,
    },
    {
        id: 4,
        title: 'Лучшие цены',
        descriptions: 'Покупайте натуральные продукты по ценам без надбавок',
        icon: cashIcon,
    },
    {
        id: 5,
        title: 'Местные сезонные продукты',
        descriptions: 'Широкий выбор продуктов',
        icon: shopIcon,
    },
    {
        id: 6,
        title: 'Приоритет качества',
        descriptions: 'Мы не стремимся к увеличению объемов, наша цель – качественные натуральные продукты',
        icon: listIcon,
    },
];

export default BENEFITS;
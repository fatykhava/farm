import potato from '../assets/potato.png';
import gerkules from '../assets/gerkules.png';
import blueberry from '../assets/blueberry.png';
import honey from '../assets/honey.png';

const PRODUCTS = [
    {
        id: 1,
        title: 'Картофель «Королева Анна» (1кг)',
        price: '0,80 коп',
        details: 'Расфасовка по сеткам 30-35 кг',
        deliveryInfo: 'Доставка: +0,10 коп за 1кг',
        icon: potato,
    },
    {
        id: 2,
        title: 'Картофель «Вектор» (1кг)',
        price: '0,80 коп',
        details: 'Расфасовка по сеткам 30-35 кг',
        deliveryInfo: 'Доставка: +0,10 коп за 1кг',
        icon: potato,
    },
    {
        id: 3,
        title: 'Овёс (мешок)',
        price: '15 руб',
        details: 'Расфасовка в мешок 30 кг',
        deliveryInfo: 'Доставка бесплатно',
        icon: gerkules,
    },
    {
        id: 4,
        title: 'Голубика садовая',
        price: 'Нет в наличии',
        details: '',
        deliveryInfo: '',
        icon: blueberry,
    },
    {
        id: 5,
        title: 'Мёд лесной',
        price: 'Нет в наличии',
        details: '',
        deliveryInfo: '',
        icon: honey,
    },
];

export default PRODUCTS;

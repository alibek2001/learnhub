const Rajorpay = require('razorpay');
require('dotenv').config();

// Временное решение для запуска приложения без ключей Razorpay
let instance;
try {
    instance = new Rajorpay({
        key_id: process.env.RAZORPAY_KEY || 'rzp_test_placeholder',
        key_secret: process.env.RAZORPAY_SECRET || 'secret_placeholder'
    });
} catch (error) {
    console.warn('Предупреждение: Razorpay не настроен правильно. Платежные функции не будут работать.');
    // Создаем заглушку для instance с теми же методами
    instance = {
        orders: {
            create: () => Promise.resolve({ id: 'dummy_order_id' })
        },
        payments: {
            fetch: () => Promise.resolve({}),
            capture: () => Promise.resolve({})
        }
    };
}

exports.instance = instance;
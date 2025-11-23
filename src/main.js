import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

const app = mount(App, {
    target: document.getElementById('app'),
})

export default app

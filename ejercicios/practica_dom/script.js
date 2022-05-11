import agregarMenu from "./menu_desplegable.js";
import relojDigital from "./reloj_digital.js";
import alarma from "./alarma_sonora.js";
import movingDot from "./move_dot.js";
import shortcutKeyword from "./shortcuts_keywords.js";
import { countDown } from "./countDownTime.js";

const $hamburger = document.querySelector(".hamburger");

agregarMenu($hamburger);
relojDigital(".startReloj", ".stopReloj");
alarma(".startAlarm", ".stopAlarm", ".alarm");
movingDot(".background_section", ".big_dot");
shortcutKeyword();
countDown(".count_down_time","01/01/2012/12:00:00","04/05/2022/12:10:05");






        

        

        
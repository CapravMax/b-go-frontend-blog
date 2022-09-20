import React from "react";
import { Link } from "react-router-dom";
import './style.module.scss';

const NotFoundPage = () => {
    return (
      <div class="style_wrapper__HTlko">
        <div class="no_page_main">
          <div class="no_page_content">
            <span>404</span>
          </div>

          <div className="no_page_txt">
            <span>Такой страницы нет</span>
          </div>

          <div className="no_page_button">
            <a href="#">Перейти на главную</a>
          </div>
        </div>
      </div>
    );
  }

export default NotFoundPage;

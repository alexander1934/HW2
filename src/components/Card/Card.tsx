import React from 'react';
import "./Card.css";

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="card__left">
        <img
          src={props.image}
          alt={`${props.title?.toString()[0]}`}
          className="card__image"
        />
        <div className="card__title">
          {props.title}
          <div className="card__subtitle">{props.subtitle}</div>
        </div>
      </div>
      <div className="card__right">{props.content}</div>
    </div>
  );
};

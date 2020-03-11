import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function createArrow(className) {
  return function NextArrow(props) {
    if (!className) {
      return null;
    }
    const { onClick, className: originalClassName } = props;
    return <div className={className} onClick={onClick} />;
  };
}

// исполнение возвращает вот это если передал 'test-class' как аргумент:
// function PrevArrow(props) {
//   const { onClick, className: originalClassName } = props;
//   return <div className={'test-class' || originalClassName} onClick={onClick} />;
// };

// исполнение возвращает вот это если не передал аргумент:
// function PrevArrow(props) {
//   const { onClick, className: originalClassName } = props;
//   return <div className={undefined || originalClassName} onClick={onClick} />;
// };

class SliderComponent extends Component {
  componentDidMount() {
    window.addEventListener('touchstart', this.touchStart);
    window.addEventListener('touchmove', this.preventTouch, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener('touchstart', this.touchStart);
    window.removeEventListener('touchmove', this.preventTouch, {
      passive: false
    });
  }

  touchStart(e) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }

  preventTouch(e) {
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(this.clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }

  render() {
    //от родителя приходит значение, или устанавливается дефолтное значение после знака равно
    const {
      children = [],
      autoplay,
      infinite,
      slidesToShow = 1,
      slidesToScroll = 1,
      autoplaySpeed = 6000,
      pauseOnHover = false,
      arrowNextClassName,
      arrowPrevClassName
    } = this.props;

    //от родителя приходит значение, или устанавливается дефолтное значение после знака равно

    const CustomNextArrow = createArrow(arrowNextClassName);
    const CustomPrevArrow = createArrow(arrowPrevClassName);

    //передаешь в slick (из документации)
    const SETTINGS = {
      infinite,
      speed: 500,
      slidesToShow,
      arrows: arrowNextClassName || arrowPrevClassName,
      slidesToScroll,
      autoplay,
      autoplaySpeed,
      pauseOnHover,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />
    };
    //передаешь в slick
    return <Slider {...SETTINGS}>{children}</Slider>;
  }
}

export default SliderComponent;

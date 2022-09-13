import './house-pc.css';
const HousePC = () =>{
    return(
        <section className="house-pc">
            <div className="container">
                    <h1>Выберите тип конструкции</h1>
                    <div className="grid-container">
                        <div className="grid-elem-1" data-circle>
                        </div>
                        <div className="grid-elem-2" data-circle>
                                <a href="#catalog">
                                    <div className="house_img_text">Скатная кровля</div>
                                    <img src="/img/Кровля-скат.png" alt="" className="house_img_pic"/>
                                </a>
                        </div>
                        <div className="grid-elem-3" data-circle>
                                <a href="#catalog">
                                    <div className="house_img_text">Плоская кровля</div>
                                    <img src="/img/Кровля-плоск.png" alt="" className="house_img_pic"/>
                                </a>
                        </div>
                        <div className="grid-elem-4" data-circle >
                                <a href="#catalog">
                                    <div className="house_img_text">Балконы</div>
                                    <img src="/img/Балкон.png" alt="" className="house_img_pic"/>
                                </a>
                        </div>
                        <div className="grid-elem-5" data-circle>
                        </div>
                        <div className="grid-elem-6" data-circle>
                                <a href="#catalog">
                                    <div className="house_img_text">Полы</div>
                                    <img src="/img/Пол.png" alt="" className="house_img_pic"/>
                                </a>
                        </div>
                        <div className="grid-elem-7">
                            <div className="grid-elem-7-1" data-circle>
                                <a href="#catalog">
                                    <div className="house_img_text">Цоколь</div>
                                    <img src="/img/Цоколь.png" alt="" className="house_img_pic"/>
                                </a>
                            </div>
                                <div className="grid-elem-7-2" data-circle>
                                <a href="#catalog">
                                    <div className="house_img_text">Стены</div>
                                    <img src="/img/Пол.png" alt="" className="house_img_pic"/>
                                </a>
                                </div>
                                <div className="grid-elem-7-21" data-circle>
                                    <a href="#catalog">
                                        <img src="/img/Пол.png" alt="" className="house_img_pic"/>
                                        <div className="house_img_text">Стены</div>
                                    </a>
                                    </div>
                            </div>
                            <div className="grid-elem-8" data-circle>
                            </div>
                            <div className="grid-elem-9" data-circle>
                                <a href="#catalog">
                                    <div className="house_img_text">Фундамент</div>
                                    <img src="/img/Фундамент.png" alt="" className="house_img_pic"/>
                                </a>
                            </div>
                            <div className="grid-elem-10" data-circle >
                                <a href="#catalog">
                                    <div className="house_img_text">Трубы</div>
                                    <img src="/img/трубы.png" alt="" className="house_img_pic"/>
                                </a>
                            </div>
                        </div>
                    </div>
        </section>
    );
}

export default HousePC;
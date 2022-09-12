import './catalog-item.css'

const { Component } = require("react");


class CatalogItem extends Component{
    render(){
        return(
                    <div className="col">       
                        <div className="card card-1" id ="data-os">
                            <div className="card-side-1">
                                <img src="/img/osnova.jpeg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Пеноплэкс Основа®</h5>
                                <p className="card-text">Теплоизоляция внешних и внутренних ограждающих конструкций. </p>
                                <p className="card-text">В продаже имеется материал с толщиной листа 20, 30, 40, 50, 100 мм.</p>
                                <p className="card-text">Область применения: стены, цоколи и первые этажи конструкций.</p>
                                <div className="card-char">Характеристики &rarr;</div>
                                    <div className="card-orders">
                                        <div className="card-price">240 ₽/лист</div>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Купить</button>
                                    </div>   
                                </div>
                            </div>
                            <div className="card-side-2 hide">
                                <div className="card-body">
                                    <h5 className="card-title" >Характеристики</h5>
                                    <p className="card-text">Производятся по ТУ 5767-006-54349294-2014</p>
                                    <p className="card-text">Водопоглощение за 24 часа: 0,4% </p>
                                    <p className="card-text">Группа горючести по 123-ФЗ: Г4</p>
                                    <p className="card-text">Коэффициент теплопроводности: 0,034 Вт/(м×°К)</p>
                                    <p className="card-text">Звукоизоляция перегородки: 41 дБ</p>
                                    <p className="card-text">Плотность: 27-35 кг/м3</p>
                                    <p className="card-text">Модуль упругости: 17 МПа</p>
                                      <ul>
                                          <li>низкая теплопроводность</li>
                                          <li>нулевое водопоглощение (однородная структура из герметичных ячеек);</li>
                                          <li>высокая прочность на сжатие и изгиб;</li>
                                          <li>долговечность;</li>
                                          <li>экологичность;</li>
                                      </ul>
                                      <div className="card-char">Назад</div>
                                  </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default CatalogItem;
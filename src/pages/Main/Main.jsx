import {useEffect} from 'react';
import {useQuery} from '@apollo/client'
import {MAIN} from 'GraphQL/Queries'
import clsx from 'clsx';
import styles from'./style.module.scss'
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';


const Main = () => {

    const {loading, data} = useQuery(MAIN)

    useEffect(() => {
    }, [data]);

    return (

            <main className={clsx(styles['main'])}>
                <div className={clsx(styles['main__block1'])}>
                    <div className={clsx(styles['main__block1__lines'])}>
                        <svg width="21" height="230" viewBox="0 0 21 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="1" width="1" height="228" fill="#6A7B8E"/>
                            <rect x="21" width="1" height="21" transform="rotate(90 21 0)" fill="url(#paint0_linear_132_1127)"/>
                            <rect x="21" y="97" width="1" height="21" transform="rotate(90 21 97)" fill="url(#paint1_linear_132_1127)"/>
                            <rect x="21" y="167" width="1" height="21" transform="rotate(90 21 167)" fill="url(#paint2_linear_132_1127)"/>
                            <rect x="21" y="229" width="1" height="21" transform="rotate(90 21 229)" fill="url(#paint3_linear_132_1127)"/>
                            <defs>
                                <linearGradient id="paint0_linear_132_1127" x1="21.5" y1="0" x2="21.5" y2="21" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6A7B8E" stopOpacity="0"/>
                                    <stop offset="1" stopColor="#6A7B8E"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_132_1127" x1="21.5" y1="97" x2="21.5" y2="118" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6A7B8E" stopOpacity="0"/>
                                    <stop offset="1" stopColor="#6A7B8E"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_132_1127" x1="21.5" y1="167" x2="21.5" y2="188" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6A7B8E" stopOpacity="0"/>
                                    <stop offset="1" stopColor="#6A7B8E"/>
                                </linearGradient>
                                <linearGradient id="paint3_linear_132_1127" x1="21.5" y1="229" x2="21.5" y2="250" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#6A7B8E" stopOpacity="0"/>
                                    <stop offset="1" stopColor="#6A7B8E"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className={clsx(styles['main__block1__lines__group1'])}>

                            {!loading && (
                                <>
                                    <h5>{data.page.content_on_main.block1.group1.title1}</h5>
                                    <ul className={clsx(styles['main__block1__lines__group1__list1'])}>
                                        {data.page.content_on_main.block1.group1.list1.split('\n').map((x, i) => <li
                                            key={i}>{x}</li>)}
                                    </ul>

                                    <ul className={clsx(styles['main__block1__lines__group1__list2'])}>
                                        {data.page.content_on_main.block1.group1.list2.split('\n').map((x, i) => <li
                                            key={i}>{x}</li>)}
                                    </ul>

                                    <ul className={clsx(styles['main__block1__lines__group1__list3'])}>
                                        {data.page.content_on_main.block1.group1.list3.split('\n').map((x, i) => <li
                                            key={i}>{x}</li>)}
                                    </ul>

                                    <ul className={clsx(styles['main__block1__lines__group1__list4'])}>
                                        {data.page.content_on_main.block1.group1.list4.split('\n').map((x, i) => <li
                                            key={i}>{x}</li>)}
                                    </ul>
                                </>
                            )}
                        </div>

                    </div>


                    <div className={clsx(styles['main__block1__group2'])}>
                        {!loading && (
                            <>
                                {/*<h5>{data.page.content_on_main.block1.group2.title2}</h5>*/}
                            </>
                        )}
                                <Form className={clsx(styles['main__block1__group2__form'])}>
                                    {/*выключено до лучших времен*/}
                                    {/*<Input placeholder='Имя'/>*/}
                                    {/*<Input placeholder='Контакт' />*/}
                                    {/*<Input placeholder='Город' />*/}
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                        <Button>Узнать больше</Button>
                                    </a>
                                </Form>

                    </div>

                </div>


                <div className={clsx(styles['main__block2'])}>
                    {!loading && Object.entries(data.page.content_on_main.block2).filter(key => /service/.test(key)).map(([_, value]) => value).map(({title, description, image}, index)=>(

                        <div className={clsx(styles['main__block2__item'], styles[`main__block2__item--${index + 1}`])} key={index}>

                            <div className={clsx(styles['main__block2__wrap'])}>
                                <h3 className={clsx(styles['main__block2__item__title'])}>{title}</h3>
                                <ul className={clsx(styles['main__block2__item__list'], styles['list'])}>
                                    {description.split('\n').map((x, i) => <li key={i} className={clsx(styles['list__item'])}>{x}</li>)}
                                </ul>
                            </div>

                        </div>

                    ))}
                </div>


                <div className={clsx(styles['main__block3'])}>
                    {!loading && (

                            <h3>{data.page.content_on_main.block3.title3}</h3>


                    )}
                    <div className={clsx(styles['main__block3__group3'])}>
                        {!loading && (
                            <>

                                <h3>{data.page.content_on_main.block3.group3.subtitle1}</h3>


                                <ul className={clsx(styles['main__block3__group3__list'])}>
                                    {data.page.content_on_main.block3.group3.list5.split('\n').map((x, i) => <li
                                        key={i}><span>{x}</span></li>)}
                                </ul>
                            </>
                        )}
                    </div>

                    <div className={clsx(styles['main__block3__group4'])}>
                        {!loading && (
                            <>
                                <h3>{data.page.content_on_main.block3.group4.subtitle2}</h3>
                                <ul className={clsx(styles['main__block3__group4__list'])}>
                                    {data.page.content_on_main.block3.group4.list6.split('\n').map((x, i) => <li
                                        key={i}><span>{x}</span></li>)}
                                </ul>
                            </>
                        )}

                    </div>
                </div>

                <div className={clsx(styles['main__block4'])}>
                    <div className={clsx(styles['main__block4__content'])}>
                    {!loading && (
                        <>
                            <h2>{data.page.content_on_main.block4.title3}</h2>
                            <p>{data.page.content_on_main.block4.paragraph1}</p>
                            <ul className={clsx(styles['main__block4__content__list'])}>
                                {data.page.content_on_main.block4.list7.split('\n').map((x, i) => <li key={i}>{x}</li>)}
                            </ul>
                            <p className={clsx(styles['after_list'])}>{data.page.content_on_main.block4.paragraph2}</p>
                        </>

                    )}
                        </div>

                    <div className={clsx(styles['main__block4__image'])}>
                        {!loading && (

                            <img src={data.page.content_on_main.block4.image.sourceUrl} alt=""/>

                        )}
                </div>

                </div>


                <div className={clsx(styles['main__block5'])}>
                    {!loading && (

                            <h2>{data.page.content_on_main.block5.title4}</h2>

                    )}
                    <div className={clsx(styles['main__block5__groups'])}>
                    <div className={clsx(styles['main__block5__groups__group5'])}>
                        {!loading && (
                            <>
                                <h4>{data.page.content_on_main.block5.group5.subtitle2}</h4>
                                <p>{data.page.content_on_main.block5.group5.paragraph3}</p>
                            </>
                        )}
                    </div>

                    <div className={clsx(styles['main__block5__groups__group6'])}>
                        {!loading && (
                            <>
                                <h4>{data.page.content_on_main.block5.group6.subtitle3}</h4>
                                <p>{data.page.content_on_main.block5.group6.paragraph4}</p>
                            </>
                        )}
                    </div>

                    <div className={clsx(styles['main__block5__groups__group7'])}>
                        {!loading && (
                            <>
                                <h4>{data.page.content_on_main.block5.group7.subtitle4}</h4>
                                <p>{data.page.content_on_main.block5.group7.paragraph5}</p>
                            </>

                        )}
                    </div>
                </div>
            </div>


                <div className={clsx(styles['main__block6'])}>
                    {!loading && (
                       <>
                            <h3>{data.page.content_on_main.block6.title4}</h3>
                        </>
                    )}
                    <div className={clsx(styles['main__block6__groups'])}>
                    <div className={clsx(styles['main__block6__groups__group8'])}>
                        {!loading && (
                            <>
                                <h5>{data.page.content_on_main.block6.group8.subtitle4}</h5>
                                <p>{data.page.content_on_main.block6.group8. description6}</p>
                                <h5>{data.page.content_on_main.block6.group8.subtitle5}</h5>
                                <p>{data.page.content_on_main.block6.group8. description7}</p>
                                <h5>{data.page.content_on_main.block6.group8.subtitle6}</h5>
                                <p><a href="mailto:Info@b-go.ru">{data.page.content_on_main.block6.group8. description8}</a></p>
                                <h5>{data.page.content_on_main.block6.group8.subtitle7}</h5>
                                <p><a href="tel:+78005556105">{data.page.content_on_main.block6.group8. description9}</a></p>
                            </>

                        )}

                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                            <Button>Написать</Button>
                        </a>

                    </div>
                    {/*Выключено до лучших времен*/}
                    {/*<div className={clsx(styles['main__block6__groups__group9'])}>*/}
                    {/*    {!loading && (*/}
                    {/*        <>*/}
                    {/*            <h4>{data.page.content_on_main.block6.group9.title8}</h4>*/}
                    {/*        </>*/}
                    {/*    )}*/}
                    {/*            <Form>*/}
                    {/*                <Input placeholder='Имя'/>*/}
                    {/*                <Input placeholder='Контакт' />*/}
                    {/*                <Input placeholder='Город' />*/}
                    {/*                <Button>Отправить</Button>*/}
                    {/*            </Form>*/}


                    {/*</div>*/}

                    </div>
                </div>

            </main>

    )
};


export default Main;
import { useEffect } from 'react';
import {useQuery} from '@apollo/client'
import {MAIN} from 'GraphQL/Queries'

import clsx from 'clsx';
import styles from'./style.module.scss'

const Main = () => {
    const {error, loading, data} = useQuery(MAIN)
    useEffect(() => {
    }, [data]);

    return (
        <>
            <main className={clsx(styles['main'])}>
                <div className={clsx(styles['main__block1'], styles['content1'])}>
                    <div className={clsx(styles['main__image'])}>
                        <img src="../../assets/img/main/Lines.svg" alt="lines"/>
                    </div>
                    <div className={clsx(styles['block1__group1'])}>
                        {!loading && (
                            <>
                                <h2>{data.page.content_on_main.block1.group1.title1}</h2>
                                <ul className={clsx(styles['group1__list'])}>
                                    {data.page.content_on_main.block1.group1.list1.split('\n').map((x, i) => <li
                                        key={i}>{x}</li>)}
                                </ul>
                            </>
                        )}
                    </div>
                    <div className={clsx(styles['block1__group2'])}>
                        {!loading && (
                            <>
                                <h2>{data.page.content_on_main.block1.group2.title2}</h2>

                            </>
                        )}
                    </div>
                </div>

                <div className={clsx(styles['grid'], styles['main__block2'])}>
                    {!loading && Object.entries(data.page.content_on_main).filter(key => /service/.test(key)).map(([_, value]) => value).map(({
                                                                                                                                                  title,
                                                                                                                                                  description,
                                                                                                                                                  image
                                                                                                                                              }, index) => (
                        <div className={clsx(styles['grid__item'], styles[`grid__item--${index + 1}`])} key={index}>
                            <div className={clsx(styles['grid__wrap'])}>
                                <h3 className={clsx(styles['grid__title'])}>{title}</h3>
                                <ul className={clsx(styles['grid__list'], styles['list'])}>
                                    {description.split('\n').map((x, i) => <li key={i}
                                                                               className={clsx(styles['list__item'])}>{x}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={clsx(styles['main__block3'], styles['block3'])}>
                    <div className={clsx(styles['block3__group3'])}>
                        {!loading && (
                            <>
                                <h2>{data.page.content_on_main.block3.group3.subtitle1}</h2>
                                <ul className={clsx(styles['group3__list'])}>
                                    {data.page.content_on_main.block3.group3.list5.split('\n').map((x, i) => <li
                                        key={i}>{x}</li>)}
                                </ul>
                            </>
                        )}
                    </div>


                    <div className={clsx(styles['block3__group4'])}>
                        {!loading && (
                            <>
                                <h2>{data.page.content_on_main.block3.group3.subtitle2}</h2>
                                <ul className={clsx(styles['group4__list'])}>
                                    {data.page.content_on_main.block3.group4.list6.split('\n').map((x, i) => <li
                                        key={i}>{x}</li>)}
                                </ul>
                            </>
                        )}
                    </div>
                </div>

                <div className={clsx(styles['main__block4'], styles['block4'])}>
                    {!loading && (
                        <>
                            <h2>{data.page.content_on_main.block4.title3}</h2>
                            <p>{data.page.content_on_main.block4.paragraph1}</p>
                            <ul className={clsx(styles['group3__list'])}>
                                {data.page.content_on_main.block4.list7.split('\n').map((x, i) => <li key={i}>{x}</li>)}
                            </ul>
                            <p>{data.page.content_on_main.block4.paragraph2}</p>
                            <img src={data.page.content_on_main.block4.image.sourceUrl} alt=""/>
                        </>
                    )}

                </div>


                <div className={clsx(styles['main__block5'], styles['block5'])}>
                    <div className={clsx(styles['block5__group5'])}>
                        {!loading && (
                            <>
                                <h2>{data.page.content_on_main.block5.group5.subtitle2}</h2>
                                <p>{data.page.content_on_main.block5.group5.paragraph3}</p>

                            </>
                        )}
                    </div>

                    <div className={clsx(styles['block5__group6'])}>
                        {!loading && (
                            <>
                                <h2>{data.page.content_on_main.block5.group6.subtitle3}</h2>
                                <p>{data.page.content_on_main.block5.group6.paragraph4}</p>

                            </>
                        )}
                    </div>

                    <div className={clsx(styles['block5__group7'])}>
                        {!loading && (
                            <>
                                <h2>{data.page.content_on_main.block5.group7.subtitle4}</h2>
                                <p>{data.page.content_on_main.block5.group7.paragraph5}</p>

                            </>
                        )}
                    </div>
                </div>

                <div className={clsx(styles['main__block6'], styles['block6'])}>
                    {!loading && (
                        <>
                            <h3>{data.page.content_on_main.block6.title4}</h3>
                        </>
                    )}
                    <div className={clsx(styles['block6__group8'], styles['group8'])}>
                        {!loading && (
                            <>
                                <h3>{data.page.content_on_main.block6.group8.subtitle4}</h3>
                                <p>{data.page.content_on_main.block6.group8. description6}</p>
                                <h3>{data.page.content_on_main.block6.group8.subtitle5}</h3>
                                <p>{data.page.content_on_main.block6.group8. description7}</p>
                                <h3>{data.page.content_on_main.block6.group8.subtitle6}</h3>
                                <p>{data.page.content_on_main.block6.group8. description8}</p>
                                <h3>{data.page.content_on_main.block6.group8.subtitle7}</h3>
                                <p>{data.page.content_on_main.block6.group8. description9}</p>
                            </>
                        )}

                    </div>

                    <div className={clsx(styles['block6__group9'], styles['group9'])}>
                        {!loading && (
                            <>
                                <h3>{data.page.content_on_main.block6.group9.title8}</h3>

                            </>
                        )}
                    </div>

                </div>


            </main>
        </>
    )
};


export default Main;
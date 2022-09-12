import {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import {ANTICRISIS} from 'GraphQL/Queries';
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';

import clsx from 'clsx'
import styles from './style.module.scss';

const Anticrisis = () => {
    const {error, loading, data} = useQuery(ANTICRISIS);

const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const changeName = (e) => setName(prev => e.target.value) 
    const changeContact = (e) => setContact(prev => e.target.value) 

    useEffect(() => {
    },[data]);
    return (
        <div className={clsx(styles['anticrisis'])}>
            <div className={clsx(styles['anticrisis__title1'], styles['title1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.anticrisisConsalt.title1}</h2>
                    </>
                )}
            </div>

            <div className={clsx(styles['anticrisis__img'], styles['img1'])} >
                {!loading &&  (
                    <img src={data.page.anticrisisConsalt.pictureAnticrisis.sourceUrl} alt="" />
                )}
            </div>

            <div className={clsx(styles['anticrisis__block1'], styles['block1'])}>
                {!loading && (
                    <>
                        <h2>{data.page.anticrisisConsalt.block1.title2}</h2>
                        {data.page.anticrisisConsalt.block1.list1.split('\n').map((x, key) => <h3 key={key}>{x}</h3>)}

                    </>
                )}
            </div>

            <div className={clsx(styles['anticrisis__block2'], styles['block2'])}>
                {!loading && (
                    <>
                        <h3>{data.page.anticrisisConsalt.block2.title3}</h3>
                        <ul className={clsx(styles['block__list'])}>
                            {data.page.anticrisisConsalt.block2.list1.split('\n').map((x, i)=><li key={i}>{x}</li>)}
                        </ul>
                        <p>{data.page.anticrisisConsalt.block2.paragraf1}</p>

                    </>
                )}
            </div>

            <div className={clsx(styles['anticrisis__form'], styles['form'])}>
                {!loading && (
                    <>
                        <h3>{data.page.anticrisisConsalt.form.title4}</h3>
                        <Form className={clsx(styles['form'])}>
                            <Input value={name} onChange={changeName} placeholder='Имя'/>
                            <Input value={contact} onChange={changeContact} placeholder='Контакт' />
                            <Button>Отправить</Button>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Anticrisis;
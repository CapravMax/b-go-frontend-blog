import { useEffect } from 'react';
import {useQuery} from '@apollo/client';
import {CONTACT} from 'GraphQL/Queries';
import clsx from 'clsx';
import styles from './style.module.scss';
import Input from 'components/Input';
import Button from 'components/Button';
import Form from 'components/Form';

const Contacts = () => {
    const {loading, data} = useQuery(CONTACT)
    useEffect(() => {
    }, [data]);

    return (

            <div className={clsx(styles['contact'])}>
                <div className={clsx(styles['contact__block1'])}>
                    <div className={clsx(styles['contact__block1__group'])}>
                            {!loading && (
                                <>
                                    <h5>{data.page.contact.block1.group.title1}</h5>
                                    <h6>{data.page.contact.block1.group.subtitle1}</h6>
                                    <p>{data.page.contact.block1.group.paragraph1}</p>
                                    <h6>{data.page.contact.block1.group.subtitle2}</h6>
                                    <p>{data.page.contact.block1.group.paragraph2}</p>
                                    <h6>{data.page.contact.block1.group.subtitle3}</h6>
                                    <p><a href="mailto:Info@b-go.ru">{data.page.contact.block1.group.paragraph3}</a></p>
                                    <h6>{data.page.contact.block1.group.subtitle4}</h6>
                                    <p><a href ="tel:+78005556105">{data.page.contact.block1.group.paragraph4}</a></p>
                                </>
                            )}

                        <Form className={clsx(styles['form'])}>
                            {/*<Input value={name} onChange={changeName} placeholder='Имя'/>*/}
                            {/*<Input value={contact} onChange={changeContact} placeholder='Контакт' />*/}
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5BIF4KG41KU5n153xW6uMQ7Etbd9rf3iVa9A-Tjma1ZxbNw/viewform">
                                <Button>Написать</Button>
                            </a>
                        </Form>
                        </div>
                    </div>
                    {/*<div className={clsx(styles['contact__block1__form'])}>*/}
                    {/*    {!loading && (*/}
                    {/*        <>*/}
                    {/*            <h5>{data.page.contact.block1.form.subtitle5}</h5>*/}
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

    )
};


export default Contacts;
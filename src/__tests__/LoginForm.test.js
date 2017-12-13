import React from 'react';
import LoginForm, {handleLogin} from '../components/LoginPage/LoginForm'
import { shallow } from 'enzyme';


describe('LoginForm methods', () => {

    describe('методы компонента', () => {
        const wrapper = shallow(<LoginForm />);

        it('contain instance method handleLogin', () => {
            expect(wrapper.instance().handleLogin).toBeDefined();
        });

        it('contain instance method handleRegist', () => {
            expect(wrapper.instance().handleRegist).toBeDefined();
        });
    });

    describe('render', () => {
        const wrapper = shallow(<LoginForm />);

        it('Присутствует input с name email', () => {
            expect(
                wrapper.findWhere(
                    el => el.type() === 'input' && el.props().name === 'email'
                )
            ).toHaveLength(1);
        });

        it('Присутствует input с name pas', () => {
            expect(
                wrapper.findWhere(
                    el => el.type() === 'input' && el.props().name === 'pass'
                )
            ).toHaveLength(1);
        });

        it('Присутствует button с onClick = handleLogin', () => {
            expect(
                wrapper.findWhere(
                    el =>
                    el.type() === 'button' &&
                    el.props().onClick === wrapper.instance().handleLogin
                )
            ).toHaveLength(1);
        });

        // it('Появляется button с текстом Зарегистрироваться если человек не зарегистрирован', () => {
        //     expect(
        //         wrapper.setState({ isRegistered: false });
        //
        //         wrapper.findWhere(
        //             el =>
        //             el.type() === 'button' &&
        //             el.innerText === 'Зарегистрироваться'
        //         )
        //     ).toHaveLength(1);
        // });

        it('Отсутствует p.error', () => {
            expect(wrapper.find('p.error')).toHaveLength(0);
        });

    });
})

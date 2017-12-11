import React from 'react';
import LoginForm, {handleLogin} from '../components/LoginPage/LoginForm'
import { shallow } from 'enzyme';


describe('LoginForm methods', () => {
    it('вызывает функцию loginRequest с параметрами email и pass', () => {
        expect(handleLogin());
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

        it('Отсутствует p.error', () => {
            expect(wrapper.find('p.error')).toHaveLength(0);
        });

        // it('Если ввести неправильный email, password и нажать button с handleSumbit — появится p.error с информацией о не правильном пароле или почте', () => {
        //     const emailInput = wrapper.findWhere(
        //         el => el.type() === 'input' && el.props().name === 'email'
        //     );
        //     const passwordInput = wrapper.findWhere(
        //         el => el.type() === 'input' && el.props().name === 'password'
        //     );
        //     const button = wrapper.findWhere(
        //         el =>
        //         el.type() === 'button' &&
        //         el.props().onClick === wrapper.instance().handleSubmit
        //     );
        //     emailInput.simulate('change', {
        //         target: { value: 'test', name: 'email' }
        //     });
        //     passwordInput.simulate('change', {
        //         target: { value: 'test', name: 'password' }
        //     });
        //     button.simulate('click');
        //     expect(wrapper.find('p.error')).toHaveLength(1);
        // });

        it('Если state.isRegistered === true присутствует кнопка "Войти"', () => {
            const wrapper = shallow(<Auth />);

            wrapper.setState({ isRegistered: true });

            expect(
                wrapper.findWhere(
                    el =>  el.type() === 'button' && el.innerText() === 'Войти'
                )
            ).toHaveLength(1);
        });
    });
})

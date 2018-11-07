import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWidget from './HelloWidget';

describe(HelloWidget, () => {
    const name = 'Person';
    const mockRemovePeople = jest.fn();
    const component = shallow(
        <HelloWidget name={name} removePeople={mockRemovePeople}/>
    );

    it ('renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWidget name="Person" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('contains the supplied name', () => {
        expect(component.text()).toContain(name);
    });

    it('modifies the greeting when fredify button is clicked', () => {
        component.find('button.fredify').simulate('click');
        expect(component.text()).toContain('Yaba Daba Doo');
    });

    it('calls the passed in removePeople function when remove button is clicked', () => {
        component.find('button.remove').simulate('click');
        expect(mockRemovePeople).toBeCalled();
    });
});
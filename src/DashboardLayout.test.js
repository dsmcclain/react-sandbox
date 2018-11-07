import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import DashboardLayout from './DashboardLayout';
import AddPeople from './AddPeople';
import HelloWidget from './HelloWidget';

describe(DashboardLayout, () => {
    const component = shallow(
        <DashboardLayout />
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <DashboardLayout />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('contains an AddPeople subcomponent', () => {
        expect(component.find(AddPeople)).toHaveLength(1);
    });

    it('contains the same number of HelloWidget components as people', () => {
        const helloWorlds = component.find(HelloWidget).length;
        const people   = component.state('people').length;
        expect(helloWorlds).toEqual(people);
    });

    it('adds another person when the addPeople function is called', () => {
        const before = component.find(HelloWidget).length;
        component.instance().addPeople('Sample');
        component.update();
        const after = component.find(HelloWidget).length;
        expect(after).toBeGreaterThan(before);
    });

    it('removes a person from the list when the removePerson function is called', () => {
        const before = component.find(HelloWidget).length;
        const removeMe = component.state('people')[0];
        component.instance().removePeople(removeMe);
        const after = component.find(HelloWidget).length;
        expect(after).toBeLessThan(before);
    });
})
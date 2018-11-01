import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddPeople from './AddPeople';
import HelloWorld from './HelloWorld';

describe(HelloWorldList, () => {
    const component = shallow(
        <HelloWorldList />
    );

    it('renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorldList />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('contains an AddPeople subcomponent', () => {
        expect(component.find(AddPeople)).toHaveLength(1);
    });

    it('contains the same number of HelloWorld components as people', () => {
        const helloWorlds = component.find(HelloWorld).length;
        const people   = component.state('people').length;
        expect(helloWorlds).toEqual(people);
    });

    it('adds another person when the addPeople function is called', () => {
        const before = component.find(HelloWorld).length;
        component.instance().addPeople('Sample');
        component.update();
        const after = component.find(HelloWorld).length;
        expect(after).toBeGreaterThan(before);
    });

    it('removes a person from the list when the removePerson function is called', () => {
        const before = component.find(HelloWorld).length;
        const removeMe = component.state('people')[0];
        component.instance().removePeople(removeMe);
        const after = component.find(HelloWorld).length;
        expect(after).toBeLessThan(before);
    });
})
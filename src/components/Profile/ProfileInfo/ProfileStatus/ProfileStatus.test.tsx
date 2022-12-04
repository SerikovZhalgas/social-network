import React from "react";
import TestRenderer from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe('ProfileStatus component', ()=>{
    const updateUserStatus=()=>{}

    test("after creation <input> shouldn't be displayed", ()=> {
        const testRenderer = TestRenderer.create(<ProfileStatus status={`it-kamasutra.com`} updateUserStatus={updateUserStatus}/>)
        const testInstance  = testRenderer.root;
        let span = testInstance.findByType('span')
        expect(span).not.toBeNull()
    })
    test('after creation <input> should contains correct status', ()=> {
        const testRenderer = TestRenderer.create(<ProfileStatus status={`it-kamasutra.com`} updateUserStatus={updateUserStatus}/>)
        const testInstance  = testRenderer.root;
        let span = testInstance.findByType('span')
        expect(span.children[0]).toBe('it-kamasutra.com')
    })
    test('after creation <input> shouldn\'t be displayed', ()=> {
        const testRenderer = TestRenderer.create(<ProfileStatus status={`it-kamasutra.com`} updateUserStatus={updateUserStatus}/>)
        const testInstance  = testRenderer.root;

        expect(()=>{
            let input = testInstance.findByType('input')
        }).toThrow()
    })
    test('input should be displayed in editMode instead of span', ()=> {
        const testRenderer = TestRenderer.create(<ProfileStatus status={`it-kamasutra.com`} updateUserStatus={updateUserStatus}/>)
        const testInstance  = testRenderer.root;
        let span = testInstance.findByType('span')
        span.props.onDoubleClick()
        let input = testInstance.findByType('input')
        expect(input.props.value).toBe('it-kamasutra.com')
    })
})
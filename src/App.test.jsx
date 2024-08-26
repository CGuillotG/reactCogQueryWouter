import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

describe('Is Vitest working?', () => {
    it('Truthy tests', () => {
        expect(true).toBe(true);
    });

    it('Falsy tests', () => {
        expect(false).toBe(false);
    });
});

describe('Is React working?', () => {
    it('Renders App component', () => {
        render(<div>Hello World</div>);
    });
});
import { describe, it, expect } from 'vitest';

describe('Is Vitest working?', () => {
    it('Truthy tests', () => {
        expect(true).toBe(true);
    });

    it('Falsy tests', () => {
        expect(false).toBe(false);
    });
});
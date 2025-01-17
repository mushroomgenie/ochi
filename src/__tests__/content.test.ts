import { render } from '@testing-library/svelte';
import Content from '../components/Content.svelte';
import { describe, expect, test } from '@jest/globals';
import { currentEvent } from '../store';
import { generateRandomTestEvent } from '../util';

describe('Content', () => {
    beforeEach(() => {
        currentEvent.set(undefined);
    });

    test('renders download button', () => {
        currentEvent.set(generateRandomTestEvent());
        const { getByText } = render(Content, {});

        const node = getByText('Download');
        expect(node).not.toBeNull();
    });

    test('does not render download button when no event selected', () => {
        const { queryAllByText } = render(Content, {});

        const node = queryAllByText('Download');
        expect(node.length).toBe(0);
    });
});

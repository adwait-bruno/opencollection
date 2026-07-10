import { describe, it, expect } from 'vitest';
import Prism from './prism';

describe('prism javascript grammar customizations', () => {
  it('tags a declared name, a bare reference, and a property access distinctly', () => {
    const html = Prism.highlight('const name = user.value;', Prism.languages.javascript, 'javascript');

    expect(html).toContain('<span class="token var-name">name</span>');
    expect(html).toContain('<span class="token variable">user</span>');
    expect(html).toContain('<span class="token property">value</span>');
  });

  it('still tags a method call as a function, not a property', () => {
    const html = Prism.highlight('bru.getEnvName();', Prism.languages.javascript, 'javascript');

    expect(html).toContain('<span class="token variable">bru</span>');
    expect(html).toContain('<span class="token function">getEnvName</span>');
    expect(html).not.toContain('class="token property">getEnvName<');
  });
});
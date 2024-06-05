import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';
import { libraryGenerator as angularLibraryGenerator } from '@nx/angular/generators';

import { myGeneratorGenerator } from './generator';
import { MyGeneratorGeneratorSchema } from './schema';

describe('my-generator generator', () => {
  let tree: Tree;
  const options: MyGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('sadly i throw an error because prettierv3 is used. You can fix me by using prettier v2', async () => {
    await angularLibraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});

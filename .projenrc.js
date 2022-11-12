const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'glyphack',
  authorAddress: 'sh.hooshyari@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-aws-ec2-efs',
  repositoryUrl: 'https://github.com/sh.hooshyari/cdk-aws-ec2-efs.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
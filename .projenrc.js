const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'glyphack',
  authorAddress: 'sh.hooshyari@gmail.com',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-aws-ec2-efs',
  repositoryUrl: 'https://github.com/sh.hooshyari/cdk-aws-ec2-efs.git',
  python: {
    distName: 'cdk-aws-ec2-efs',
    module: 'cdk_aws_ec2_efs',
  },
  keywords: ['cdk', 'aws-cdk', 'awscdk'],
  prettier: true,
  prettierOptions: { settings: { singleQuote: true, trailingComma: 'es5' } },
});
project.synth();

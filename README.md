# EC2 with EFS AWS CDK construct

[![npm version](https://badge.fury.io/js/cdk-aws-ec2-efs.svg)](https://badge.fury.io/js/cdk-aws-ec2-efs)
[![PyPI version](https://badge.fury.io/py/cdk-aws-ec2-efs.svg)](https://badge.fury.io/py/cdk-aws-ec2-efs)

This Construct provides an easy way to mount an EFS on EC2 in AWS CDK.

It will inject mount commands as user data script to EC2.
And the EFS will be mounted after initializing.

## Installation

### JavaScript & TypeScript

```bash
npm i cdk-aws-ec2-efs
```

### Python

```bash
pip install cdk-aws-ec2-efs
```

## Usage

Create an AWS CDK project, in your application stack create `EC2` and `EFS` resources.
Note EC2 and EFS must be in the same VPC so EC2 can reach EFS.
Then use the construct to mount EFS to EC2:

```typescript
    const fileSystem = new cdk.aws_efs.FileSystem(this, "fileSystem", {
      ...
    });
    const ec2Instance = new ec2.Instance(this, "ec2-instance", {
      ...
    });
    new Ec2WithEfs(this, "EfsMount", {
      instance: ec2Instance,
      fileSystem: fileSystem,
      configureConnection: true,
    });
```

In the above example we pass `configureConnection` as `true`,
This tell construct to take care of adding rules to EFS security groups to enable
EC2 access.

Refer to [API.md](./API.md) for full documentation.

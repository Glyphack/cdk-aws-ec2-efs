import { Stack } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as efs from "aws-cdk-lib/aws-efs";
import { Construct } from "constructs";

export interface Ec2WithEfsProps {
  /** The instance to mount file system it must have yum.
   * Amazo Linux 2 is recommended.
   * **/
  readonly instance: ec2.Instance;
  /** The file system to mount **/
  readonly fileSystem: efs.FileSystem;

  /** To configure the efs to allow connection to default port from ec2.
   * Defaults too false.
   * If you set it to true then it's not needed to allow connections manually.
   * **/
  readonly configureConnection?: boolean;

  /** Direcrory to mount the file system on the ec2 instance.
   * Defaults to /mnt/efs/fs1
   * **/
  readonly mountPoint?: string;
}

export class Ec2WithEfs extends Construct {
  constructor(scope: Construct, id: string, props: Ec2WithEfsProps) {
    super(scope, id);
    if (props.configureConnection) {
      props.fileSystem.connections.allowDefaultPortFrom(
        props.instance.connections
      );
    }
    const mountPoint = props.mountPoint ?? "/mnt/efs/fs1";
    props.instance.userData.addCommands(
      "yum check-update -y",
      "yum upgrade -y",
      "yum install -y amazon-efs-utils",
      "yum install -y nfs-utils",
      "file_system_id_1=" + props.fileSystem.fileSystemId,
      `efs_mount_point_1=${mountPoint}`,
      'mkdir -p "${efs_mount_point_1}"',
      'test -f "/sbin/mount.efs" && echo "${file_system_id_1}:/ ${efs_mount_point_1} efs defaults,_netdev" >> /etc/fstab || ' +
        'echo "${file_system_id_1}.efs.' +
        Stack.of(this).region +
        '.amazonaws.com:/ ${efs_mount_point_1} nfs4 nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport,_netdev 0 0" >> /etc/fstab',
      "mount -a -t efs,nfs4 defaults"
    );
  }
}

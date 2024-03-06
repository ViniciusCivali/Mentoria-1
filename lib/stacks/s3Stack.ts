import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket} from "aws-cdk-lib/aws-s3";

export class S3Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);

        const s3BucketTest = new Bucket(this, "s3BucketTest", {
            bucketName: "s3-bucket-test-1432"
        })
    }
}
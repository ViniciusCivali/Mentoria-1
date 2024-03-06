import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket} from "aws-cdk-lib/aws-s3";
import {Queue} from "aws-cdk-lib/aws-sqs";
import {Duration} from "aws-cdk-lib";

export class S3Stack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);

        const s3BucketTest = new Bucket(this, "s3BucketTest", {
            bucketName: "s3-bucket-test-1432"
        })

        const queue = new Queue(this, "queue", {
            visibilityTimeout: Duration.seconds(300)
        })
    }
}
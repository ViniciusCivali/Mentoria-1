import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import {S3Stack} from "../stacks/s3Stack";

export class PipelineAppAlphaStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props: cdk.StageProps) {
        super(scope, id, props);

        const lambdaStack = new S3Stack(this, "s3Stack", {
            env: props.env
        })
    }
}
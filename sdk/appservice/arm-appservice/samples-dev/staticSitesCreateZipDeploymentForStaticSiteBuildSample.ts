/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  StaticSiteZipDeploymentARMResource,
  WebSiteManagementClient
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Description for Deploys zipped content to a specific environment of a static site.
 *
 * @summary Description for Deploys zipped content to a specific environment of a static site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-09-01/examples/StaticSiteBuildZipDeploy.json
 */
async function deployASiteFromAZippedPackageToAParticularStaticSiteBuild() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "testStaticSite0";
  const environmentName = "12";
  const staticSiteZipDeploymentEnvelope: StaticSiteZipDeploymentARMResource = {
    apiZipUrl:
      "https://teststorageaccount.net/happy-sea-15afae3e-master-81828877/api-zipdeploy.zip",
    appZipUrl:
      "https://teststorageaccount.net/happy-sea-15afae3e-master-81828877/app-zipdeploy.zip",
    deploymentTitle: "Update index.html",
    functionLanguage: "testFunctionLanguage",
    provider: "testProvider"
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.beginCreateZipDeploymentForStaticSiteBuildAndWait(
    resourceGroupName,
    name,
    environmentName,
    staticSiteZipDeploymentEnvelope
  );
  console.log(result);
}

async function main() {
  deployASiteFromAZippedPackageToAParticularStaticSiteBuild();
}

main().catch(console.error);

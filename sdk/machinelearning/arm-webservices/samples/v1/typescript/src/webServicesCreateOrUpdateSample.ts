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
  WebService,
  AzureMLWebServicesManagementClient
} from "@azure/arm-webservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update a web service. This call will overwrite an existing web service. Note that there is no warning or confirmation. This is a nonrecoverable operation. If your intent is to create a new web service, call the Get operation first to verify that it does not exist.
 *
 * @summary Create or update a web service. This call will overwrite an existing web service. Note that there is no warning or confirmation. This is a nonrecoverable operation. If your intent is to create a new web service, call the Get operation first to verify that it does not exist.
 * x-ms-original-file: specification/machinelearning/resource-manager/Microsoft.MachineLearning/stable/2017-01-01/examples/putWebService.json
 */
async function putWebService() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const webServiceName = "TargetWebServiceName";
  const createOrUpdatePayload: WebService = {
    location: "West US",
    properties: {
      description: "Web Service Description",
      assets: {
        asset1: {
          name: "Execute R Script",
          type: "Module",
          locationInfo: { credentials: "", uri: "aml://module/moduleId-1" }
        },
        asset2: {
          name: "Import Data",
          type: "Module",
          locationInfo: { credentials: "", uri: "aml://module/moduleId-2" }
        }
      },
      commitmentPlan: {
        id:
          "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.MachineLearning/commitmentPlans/commitmentPlanName"
      },
      diagnostics: { level: "None" },
      exampleRequest: {
        globalParameters: {},
        inputs: {
          input1: []
        }
      },
      exposeSampleData: true,
      input: {
        type: "object",
        description: "",
        properties: {
          input1: {
            type: "object",
            description: "",
            properties: {
              columnName: { type: "String", xMsIsnullable: false }
            },
            title: ""
          }
        },
        title: ""
      },
      machineLearningWorkspace: { id: "workspaceId" },
      output: {
        type: "object",
        description: "",
        properties: {
          output1: {
            type: "object",
            description: "",
            properties: {
              age: { type: "Integer", format: "Int32", xMsIsnullable: true },
              workclass: { type: "String", xMsIsnullable: false }
            },
            title: ""
          }
        },
        title: ""
      },
      package: {
        edges: [
          {
            sourceNodeId: "node2",
            sourcePortId: "Results dataset",
            targetNodeId: "node1",
            targetPortId: "Dataset2"
          },
          {
            sourceNodeId: "node3",
            targetNodeId: "node1",
            targetPortId: "Dataset1"
          },
          {
            sourceNodeId: "node1",
            sourcePortId: "Result Dataset",
            targetNodeId: "node4"
          }
        ],
        graphParameters: {},
        nodes: {
          node1: {
            assetId: "asset1",
            parameters: {
              rScript: { certificateThumbprint: "" },
              rVersion: { certificateThumbprint: "" }
            }
          },
          node2: {
            assetId: "asset2",
            parameters: {
              accountKey: {
                certificateThumbprint: "TheThumbprint"
              },
              accountName: { certificateThumbprint: "" },
              pleaseSpecifyAuthenticationType: {
                certificateThumbprint: ""
              },
              pleaseSpecifyDataSource: {
                certificateThumbprint: ""
              }
            }
          },
          node3: { inputId: "input1" },
          node4: { outputId: "output1" }
        }
      },
      packageType: "Graph",
      parameters: {},
      payloadsInBlobStorage: false,
      readOnly: false,
      realtimeConfiguration: { maxConcurrentCalls: 4 },
      storageAccount: { name: "Storage_Name", key: "Storage_Key" },
      title: "Web Service Title"
    },
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMLWebServicesManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.webServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    webServiceName,
    createOrUpdatePayload
  );
  console.log(result);
}

putWebService().catch(console.error);

# Proposal: Add Apache Pulsar to tidb-binlog

- Author(s): Xiaolong Ran
- Last updated:  Dec 05, 2019
- Discussion at: https://github.com/pingcap/community/issues/117

## Abstract

The proposal aims at using the **key_shared** subscription type of [Apache Pulsar](https://github.com/apache/pulsar) to enhance binlog data processing capabilities.

## Background

During the Change Data Capture(CDC), we need to ensure the order of the messages, which we use Kafka to process. However Apache Kafka can only guarantee the order of messages within a single partition. If we need to expand data processing capabilities for downstream, sometimes more partitions are needed. How do we ensure the order of messages in this scenario is a tricky question to tackle.

## Proposal

We will make these changes:

1. Replace **kafak-client-go** with [pulsar-client-go](https://github.com/apache/pulsar-client-go).
2. Provide a plugin to support more message queues, including: Apache Pulsar

## Rationale

`tidb-binlog` source collects messages from other databases and publishes the messages to Pulsar topics.
`tidb-binlog` sink consumes the messages from the Pulsar topics through the key_shared subscription mode and publishes the messages to TiDB.

## Compatibility

There are no compatibility issues. Apache Pulsar is compatible with Apache Kafka protocol

## Implementation

1. Implement [pulsar-client-go](https://github.com/apache/pulsar-client-go), and make sure it meets the required interface in tidb-binlog.
2. @pingcap/ecosystem-tools

## Open issues (if applicable)

- https://github.com/pingcap/community/issues/117

# Proposal: Add Apache Pulsar to tidb-binlog

- Author(s): Xiaolong Ran
- Last updated:  Dec 05, 2019
- Discussion at: https://github.com/pingcap/community/issues/117

## Abstract

The proposal aims at:

1. Use **key_shared** subscription type of [Apache Pulsar](https://github.com/apache/pulsar) to enhance **binlog** data processing capabilities;

## Background

During the Change Data Capture(CDC), we need to ensure the order of the messages. Aka, we need to ensure that DDL arrives before DML. Currently, we use Kafka to process the order of messages, but as you know, Kafka can only guarantee the order of messages within a single partition. If we need to expand the downstream data processing capabilities, sometimes we want more partitions to provide more processing power, but how do we ensure the order of messages at this time? This is a trickier question.

## Proposal

We will make these changes:

1. Replace **kafak-client-go** with [pulsar-client-go](https://github.com/apache/pulsar-client-go).
2. Provide a plugin to support more message queues, include: Apahce Pulsar

## Rationale

Produce the data in source to the topic of Apache Pulsar, sink uses the subscription type of key_shared to consume the data in Topic.

## Compatibility

There is no compatibility issues. Apache Pulsar is compatible with Apache Kafka protocol

## Implementation

1. [@xiaolong](https://github.com/wolfstudy) can support pulsar-client-go, make sure you can meet the required interface in tidb-binlog.
2. @pingcap/ecosystem-tools

## Open issues (if applicable)

- https://github.com/pingcap/community/issues/117

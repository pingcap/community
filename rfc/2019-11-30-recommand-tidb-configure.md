# Proposal: Official recommended topologies and configurations to use TiDB

- Author(s): ET-Team
- Last updated:  Nov 30, 2019

## Abstract

When users need to use TiDB as their database, they often face what machine configuration and topology to choose. At present, we do not give an official answer, which may cause users to be troubled, what kind of The configuration is to meet the current needs. This proposal is mainly to solve the user's selection problem.

## Background

Recommending configurations to users is a relatively standard practice for major public cloud vendors. When AWS recommends EC2 to users, it will give some standard instance types. As an open source database, according to the user's characteristic needs give different topologies and database configuration and machine configuration will greatly help users to choose and better use TiDB

## Proposal

This proposal wants to achieve the following goals to make TiDB better provide database services to everyone

1. Find a more common database configuration of TiDB under some fixed topology, machine type and machine configuration
2. Measure the corresponding benchmark value in the above environment
3. Update the benchmark value to the official website and give reasonable user suggestions

## Rationale

Use sysbench to benchmark the corresponding topology and tune the TiDB parameters during the benchmarking process。

## Implementation

1. Define several standard topologies
2. Define several machine types(amd/arm/power)
3. Define several standard machine configurations(1c/2c/4c/etc.)
4. Under the above structure, type, and configuration, determine the benchmark value corresponding to TiDB, and give some configuration suggestions for TiDB
5. Add the official website page of the recommended configuration to list the existing benchmark values

# Projects Approval Criteria

Every Incubation project has an associated maturity level. Proposed Incubation projects should state their preferred maturity level. A vote is required for a project to be accepted into the corresponding maturity stage - Sandbox, Incubating, or Graduated.

## Existing Code

New projects can be spun off from the main repository of existing projects to allow projects to iterate or release independently. Take [pingcap/parser](https://github.com/pingcap/parser) as an example. As long as it gets more than 2 PMC votes, it can be directly used as a graduated project.

Part of the following maturity criteria are inspired by [CII Best Practices](https://bestpractices.coreinfrastructure.org/en):

## Sandbox Stage

- The project must be designed to extend the functionality or capabilities of one or more existing PingCAP projects
- The project name must be unique among PingCAP projects
- Has basic project information files, including README, OWNERS, CONTRIBUTING
- Has a license statement (Apache 2)
- The source code is stored on Github. Issue tracking is done via GitHub/issues, and code submission via GitHub/Pull Request.
- Has an automated continuous integration test infrastructure (CI)
- Approved by 2 or more PMC members

## Incubating Stage

- Has at least 1 user applying the project in a production environment
- Has clear documentation describing committer definitions, rights and obligations
- Has at least 3 active committers and 5 contributors. A continuous commit history is also required.
- Basic user documentation
- A clear plan for Roadmap and next version, which can be described by github milestone or documentation

## Graduation Stage

To graduate from sandbox or incubating status, or for a new project to join as a graduated project, a project must meet the incubating stage criteria plus:

- A detailed user documentation and basic reference manuals are required 
- Committers from more than two organizations
- Comply with PingCAP Code of Conduct
- Has a clear member promotion path, with a basic community governance documentation
- A user list with at least 3 users applying the project in a production environment
- Have a clear release method and release cycle. Release notes are required for every release
- Monthly Report with ongoing projects 

Projects can attempt to move directly from sandbox to graduation, if they can demonstrate sufficient maturity. Projects can remain in an incubating state indefinitely, but they are normally expected to graduate within two years.

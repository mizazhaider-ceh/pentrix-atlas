/* Atlas roadmap data: AWS (aws) */
ROADMAPS.push({
  "id": "aws",
  "title": "AWS",
  "icon": "🔶",
  "color": "#ff9900",
  "desc": "Become a confident AWS practitioner: secure your account with IAM, run workloads on EC2 and Lambda, design VPC networks, store data in S3 and RDS, and keep the bill under control.",
  "kind": "skill",
  "root": {
    "t": "AWS Practitioner",
    "d": "From your first account to production-grade cloud architecture.",
    "children": [
      {
        "t": "Cloud and AWS Foundations",
        "d": "What the cloud is, how AWS is organized globally, and how you pay for it.",
        "lv": 1,
        "children": [
          {
            "t": "What Is Cloud Computing?",
            "d": "Renting compute, storage, and networking on demand instead of buying servers you must babysit.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "The six advantages of cloud: trade capex for opex, scale globally in minutes, pay as you go",
              "On-demand self-service, broad network access, resource pooling, elasticity, measured service",
              "Why regions, availability zones, and the edge network exist"
            ],
            "do": [
              "Create an AWS account with a strong root password and enable MFA on the root user immediately",
              "Open the AWS console and note which region you are in; switch regions and watch service availability change",
              "Read the AWS shared responsibility model page and write two lines on what AWS secures vs what you secure"
            ],
            "tools": ["AWS Console", "AWS CLI"],
            "res": [
              ["What is cloud computing", "https://aws.amazon.com/what-is-cloud-computing/"],
              ["Shared responsibility model", "https://aws.amazon.com/compliance/shared-responsibility-model/"]
            ],
            "tip": "Your root user is the most dangerous credential you own. Secure it with MFA, then never use it again: do everything with IAM users or roles."
          },
          {
            "t": "Service Models: IaaS, PaaS, SaaS",
            "d": "Where your responsibility ends and the provider's begins: EC2 is rented servers, Lambda is rented code execution.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "IaaS: you manage the OS and up (EC2); PaaS: you manage code and data (Elastic Beanstalk, RDS); SaaS: you just use it (Gmail)",
              "Serverless as the next step past PaaS: no servers to patch, but less control over the environment",
              "Matching workload to model: lift-and-shift fits IaaS, greenfield web apps fit PaaS and serverless"
            ],
            "do": [
              "Classify five AWS services (EC2, Lambda, RDS, S3, ECS) as IaaS, PaaS, or serverless and justify each",
              "Price a t3.micro EC2 on-demand vs the equivalent Lambda requests for a low-traffic site",
              "Sketch which model you would pick for a personal blog and why"
            ],
            "tools": ["AWS Pricing Calculator", "AWS Console"],
            "res": [
              ["Types of cloud computing", "https://aws.amazon.com/types-of-cloud-computing/"]
            ],
            "tip": "Serverless does not mean no servers, it means the server decisions are hidden from you. You still pay for them, just per request instead of per hour."
          },
          {
            "t": "AWS Global Infrastructure",
            "d": "Regions, availability zones, and edge locations: where your data physically lives and how close it is to users.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Region: a geographic area with multiple isolated availability zones; AZs are separate data centers with independent power and networking",
              "Most services are regional, some are global (IAM, Route53, CloudFront); S3 buckets live in one region",
              "Edge locations and CloudFront points of presence bring cached content close to users; Local Zones and Wavelength for low latency"
            ],
            "do": [
              "Use the console to list all enabled regions and check your current spend per region in Cost Explorer",
              "Ping a CloudFront URL vs your EC2 origin IP and compare latency",
              "Choose the best region for a user base in Belgium and justify it (latency, data residency, price)"
            ],
            "tools": ["AWS Console", "AWS CLI", "CloudFront"],
            "res": [
              ["AWS global infrastructure", "https://aws.amazon.com/about-aws/global-infrastructure/"]
            ],
            "tip": "Never deploy everything in a single AZ. A zone outage is rare but real, and multi-AZ design is the cheapest insurance you will ever buy."
          },
          {
            "t": "Shared Responsibility Model",
            "d": "AWS secures the cloud itself; you secure what you put in it. Know exactly where that line is for every service.",
            "lv": 1,
            "time": "~2h",
            "learn": [
              "AWS responsibility: physical security, hypervisors, managed service patching (RDS OS, Lambda runtime)",
              "Your responsibility: data encryption, IAM policies, security groups, OS patching on EC2, application code",
              "How the line shifts per service: more managed means less of your responsibility"
            ],
            "do": [
              "For EC2, RDS, and Lambda, list three security tasks that are yours and three that are AWS's",
              "Review your account's Trusted Advisor security checks for open ports or missing MFA",
              "Turn on CloudTrail in your account so every API call is logged"
            ],
            "tools": ["AWS Trusted Advisor", "CloudTrail", "AWS Console"],
            "res": [
              ["Shared responsibility model", "https://aws.amazon.com/compliance/shared-responsibility-model/"],
              ["AWS CloudTrail", "https://aws.amazon.com/cloudtrail/"]
            ],
            "tip": "Every public S3 breach you read about was the customer's misconfiguration, not AWS's. The model is clear: data access control is always your job."
          },
          {
            "t": "AWS Accounts, Billing and the Free Tier",
            "d": "Set up billing alarms on day one so your first lesson is not a surprise invoice.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Free Tier types: 12 months free (t2/t3 micro), always free (Lambda 1M requests), trials",
              "Cost Explorer for seeing spend by service and region; Budgets with email alerts on forecast overruns",
              "Consolidated billing with Organizations and tagging resources for cost allocation"
            ],
            "do": [
              "Create a billing alarm in CloudWatch that emails you when estimated charges exceed $5",
              "Tag every resource you create with Project and Owner tags",
              "Open Cost Explorer, group last month's spend by service, and find your most expensive service"
            ],
            "tools": ["AWS Cost Explorer", "AWS Budgets", "CloudWatch", "AWS Organizations"],
            "res": [
              ["AWS Free Tier", "https://aws.amazon.com/free/"],
              ["Cost Explorer", "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/"]
            ],
            "tip": "Do this before launching anything: billing alarms, then a budget with an action. Forgotten NAT gateways and unattached EBS volumes are the classic first bills."
          },
          {
            "t": "Well-Architected Framework",
            "d": "Six pillars for building systems that are secure, reliable, and cost sane: review every design against them.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "The six pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
              "Design principles: stop guessing capacity, test systems in production, automate, decouple, experiment more",
              "The Well-Architected Tool: guided reviews that flag high-risk issues in your workloads"
            ],
            "do": [
              "Run a Well-Architected review on a practice workload with the Well-Architected Tool",
              "Map one design decision you made (e.g. single vs multi-AZ) to the pillar it serves",
              "Read the Security pillar whitepaper's top 10 and check your account against them"
            ],
            "tools": ["AWS Well-Architected Tool", "AWS Trusted Advisor"],
            "res": [
              ["Well-Architected Framework", "https://aws.amazon.com/architecture/well-architected/"]
            ],
            "tip": "Treat the pillars as a review checklist, not a certification. The value is in finding the one high-risk issue, usually in Security or Reliability, before production does."
          }
        ]
      },
      {
        "t": "Identity and Access Management",
        "d": "IAM is the front door of everything on AWS: users, roles, and the policies that decide who can touch what.",
        "lv": 1,
        "children": [
          {
            "t": "IAM Users and Groups",
            "d": "Give every human their own identity and bundle permissions into groups instead of attaching them one by one.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Users, groups, and managed vs inline policies; why you never share credentials between people",
              "Password policies and MFA for console access; access keys for programmatic CLI and SDK access",
              "IAM Identity Center for workforce SSO when the team grows beyond a handful of people"
            ],
            "do": [
              "Create an IAM user for yourself, add it to an Admins group, and log in with it instead of root",
              "Enable a virtual MFA device on the new user with an authenticator app",
              "Generate an access key pair and configure `aws configure` to list your S3 buckets"
            ],
            "tools": ["IAM", "AWS CLI", "Authenticator app"],
            "res": [
              ["AWS IAM", "https://aws.amazon.com/iam/"],
              ["IAM Identity Center", "https://aws.amazon.com/iam/identity-center/"]
            ],
            "tip": "Access keys in git history are a career-ending mistake. If a key ever leaks, rotate it immediately and check CloudTrail for what it did."
          },
          {
            "t": "IAM Policies: Identity-Based",
            "d": "JSON documents that say allow or deny: master Effect, Action, Resource, and Condition.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "Policy anatomy: Effect (Allow/Deny), Action (service:api), Resource (ARN), Condition (IP, time, MFA)",
              "Explicit deny always wins over allow; managed policies (AWS and customer) vs inline policies",
              "Least privilege: scope to the exact actions and ARNs the job needs, nothing broader"
            ],
            "do": [
              "Write a policy that allows listing one S3 bucket and reading only objects under `uploads/`",
              "Use the IAM policy simulator to test whether your policy grants an action you did not intend",
              "Attach the policy to a test user and confirm `aws s3 ls` works but `aws ec2 describe-instances` fails"
            ],
            "tools": ["IAM Policy Simulator", "AWS CLI"],
            "res": [
              ["IAM documentation", "https://docs.aws.amazon.com/iam/"]
            ],
            "tip": "Wildcard actions (`s3:*` on `*`) in production are how breaches happen. Start narrow; broaden only when a real workflow breaks."
          },
          {
            "t": "IAM Policies: Resource-Based",
            "d": "Some resources carry their own policies: S3 bucket policies and KMS key policies decide who may use them from anywhere.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Identity-based (attached to a user/role) vs resource-based (attached to S3 bucket, KMS key, SQS queue)",
              "Trust policies on roles: a resource-based policy that says which principals may assume the role",
              "How evaluation combines both: a request needs permission from the identity side AND not be denied on the resource side"
            ],
            "do": [
              "Write an S3 bucket policy granting a second AWS account read-only access to one prefix",
              "Add a condition requiring `aws:SecureTransport` so the bucket only serves HTTPS",
              "Break it on purpose with a wrong principal ARN, then fix it using Access Denied error messages"
            ],
            "tools": ["S3", "AWS CLI", "IAM Policy Simulator"],
            "res": [
              ["IAM documentation", "https://docs.aws.amazon.com/iam/"]
            ],
            "tip": "Bucket policies are the only way to grant access to another AWS account's principals. If cross-account reads fail, check the bucket policy before blaming the IAM user."
          },
          {
            "t": "IAM Roles and Instance Profiles",
            "d": "Roles are identities with temporary credentials: the safe way to give EC2 and Lambda permission to call AWS.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Roles vs users: no long-term keys, credentials are issued temporarily by STS",
              "Instance profiles: how EC2 assumes a role so your app never stores an access key on disk",
              "Service roles for Lambda, ECS tasks, and CodeBuild; trust policy defines who may assume the role"
            ],
            "do": [
              "Create a role for EC2 with S3 read-only access, attach it via an instance profile, and read a file from the instance with no keys configured",
              "Inspect the temporary credentials with `aws sts get-caller-identity` from the instance",
              "Create a Lambda execution role limited to writing its own CloudWatch log group"
            ],
            "tools": ["IAM", "EC2", "Lambda", "AWS CLI"],
            "res": [
              ["AWS IAM", "https://aws.amazon.com/iam/"]
            ],
            "tip": "If you ever find an access key baked into an EC2 instance or a Lambda env var, replace it with a role. Static keys on compute are always the wrong answer."
          },
          {
            "t": "Assuming Roles and Cross-Account Access",
            "d": "AssumeRole for temporary elevated access and multi-account setups: external IDs keep confused-deputy attacks out.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "STS AssumeRole flow: request short-lived credentials scoped by the role's trust and permission policies",
              "Cross-account roles for vendor or partner access; the external ID condition stops confused-deputy abuse",
              "Permission boundaries and Organizations SCPs as guardrails that even admins cannot cross"
            ],
            "do": [
              "Create a role in account B trusting an IAM user in account A, then assume it with `aws sts assume-role`",
              "Configure a named CLI profile with `role_arn` and `source_profile` so assuming is one flag away",
              "Add a Service Control Policy in Organizations that denies leaving a region"
            ],
            "tools": ["AWS STS", "AWS CLI", "AWS Organizations"],
            "res": [
              ["IAM documentation", "https://docs.aws.amazon.com/iam/"]
            ],
            "tip": "Third-party integrations that ask for your access keys are a red flag. The correct pattern is a cross-account role with an external ID, revocable in one click."
          }
        ]
      },
      {
        "t": "Compute: EC2 and Auto Scaling",
        "d": "Virtual servers done right: picking instances, paying less for them, and scaling them automatically.",
        "lv": 2,
        "children": [
          {
            "t": "EC2 Instance Types",
            "d": "The family letter tells you the workload: C for compute, M for balanced, R for memory, T for burstable.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Naming: family (C, M, R, T, G, I), generation, size (nano to 32xlarge); vCPU to memory ratios per family",
              "Burstable T instances and CPU credits: cheap for spiky workloads, throttled when credits run dry",
              "ARM Graviton instances: same work for less money on compatible software"
            ],
            "do": [
              "Launch a t3.micro with Amazon Linux 2023, SSH in, and record its CPU and memory",
              "Run `stress-ng` and watch CPU credit balance drop in CloudWatch",
              "Compare monthly on-demand price of m7i.large vs m7g.large for your region"
            ],
            "tools": ["EC2", "AWS CLI", "CloudWatch"],
            "res": [
              ["Amazon EC2", "https://aws.amazon.com/ec2/"],
              ["EC2 instance types", "https://aws.amazon.com/ec2/instance-types/"]
            ],
            "tip": "Default to the newest generation of the right family. Old generations cost more per unit of performance and nobody tells you."
          },
          {
            "t": "EC2 Purchasing Options",
            "d": "On-demand for experiments, reserved and savings plans for steady state, spot for fault-tolerant batch work.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "On-demand: no commitment, highest hourly rate; Reserved Instances and Savings Plans: 1-3 year commitment, up to 72% off",
              "Spot: spare capacity at up to 90% off, reclaimable with 2-minute warning; great for CI, batch, stateless workers",
              "Dedicated hosts for compliance; capacity reservations for guaranteed AZ capacity"
            ],
            "do": [
              "Launch a spot instance and note the spot price vs on-demand in the console",
              "Use the Savings Plans calculator to price a 1-year compute commitment for your steady workload",
              "Write the rule: which purchasing option for dev, for production web, for nightly batch jobs"
            ],
            "tools": ["EC2", "AWS Pricing Calculator"],
            "res": [
              ["Amazon EC2", "https://aws.amazon.com/ec2/"],
              ["AWS Savings Plans", "https://aws.amazon.com/savingsplans/"]
            ],
            "tip": "Spot interruptions are not random cruelty; design for them (checkpointing, stateless tasks) and spot becomes the cheapest compute you will ever use."
          },
          {
            "t": "EBS Volumes and AMIs",
            "d": "Disks that survive your instance and machine images that let you clone it: snapshots are your backup story.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "EBS volume types: gp3 (general), io2 (provisioned IOPS), st1/sc1 (throughput HDD); gp3 lets you tune IOPS independently",
              "Snapshots are incremental and stored in S3; AMIs bundle an image plus block device mapping",
              "Root volume vs data volumes; detaching and reattaching volumes; encryption at rest with KMS"
            ],
            "do": [
              "Create a gp3 volume, attach it to your instance, format and mount it",
              "Snapshot the volume, then restore the snapshot to a new volume in another AZ",
              "Build a golden AMI with your stack installed and launch two identical instances from it"
            ],
            "tools": ["EC2", "EBS", "AWS CLI"],
            "res": [
              ["Amazon EBS", "https://aws.amazon.com/ebs/"]
            ],
            "tip": "Unattached EBS volumes and old snapshots are silent money leaks. Tag volumes with their instance and set a snapshot retention policy."
          },
          {
            "t": "EC2 Key Pairs and User Data",
            "d": "Key pairs get you into the instance; user data scripts configure it automatically on first boot.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Key pairs: AWS keeps the public key, you guard the private .pem; set 400 permissions before SSH",
              "User data runs once at first launch (cloud-init): install packages, write config, start services",
              "Why user data plus an AMI beats manual setup: every instance is born identical and reproducible"
            ],
            "do": [
              "Create a key pair, download the .pem, chmod 400, and SSH into your instance",
              "Write a user data script that installs nginx and serves a hello page, then launch an instance with it",
              "Check `/var/log/cloud-init-output.log` to debug a deliberately broken script"
            ],
            "tools": ["EC2", "cloud-init", "SSH"],
            "res": [
              ["Amazon EC2", "https://aws.amazon.com/ec2/"]
            ],
            "tip": "Never put secrets in user data: it is visible to anyone who can describe the instance. Pull secrets from Secrets Manager or Parameter Store at boot."
          },
          {
            "t": "Elastic IPs and Network Interfaces",
            "d": "Static public IPs for the rare cases you need one, and ENIs as the virtual network cards behind every instance.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Elastic IP: a static public IPv4 you can remap between instances; you pay for it when it is not attached",
              "ENI: private IP, MAC, security groups; instances can carry multiple ENIs across subnets",
              "When you need an Elastic IP (DNS-safe failover, whitelisted IP) vs when an ALB or DNS name is better"
            ],
            "do": [
              "Allocate an Elastic IP, associate it, stop and start the instance, and confirm the IP persists",
              "Release it afterwards and confirm the charge stops",
              "Add a second ENI to an instance and route traffic through it"
            ],
            "tools": ["EC2", "VPC", "AWS CLI"],
            "res": [
              ["Amazon EC2", "https://aws.amazon.com/ec2/"]
            ],
            "tip": "An Elastic IP sitting unattached costs money every hour for nothing. If you allocate one, attach it or release it the same session."
          },
          {
            "t": "Auto Scaling Groups",
            "d": "Keep the right number of instances alive: scale out on load, replace failed ones automatically.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Launch templates define the instance recipe (AMI, type, user data, security groups)",
              "ASG maintains desired capacity across AZs and replaces unhealthy instances via health checks",
              "Scaling policies: target tracking (keep CPU at 50%), step scaling, scheduled scaling for known patterns"
            ],
            "do": [
              "Create a launch template from your golden AMI and an ASG with min 2, desired 2, max 4",
              "Add a target-tracking policy on average CPU and load-test it with a stress script",
              "Terminate one instance manually and watch the ASG replace it"
            ],
            "tools": ["EC2 Auto Scaling", "CloudWatch", "AWS CLI"],
            "res": [
              ["EC2 Auto Scaling", "https://aws.amazon.com/ec2/autoscaling/"]
            ],
            "tip": "Always spread an ASG across at least two AZs. A single-AZ ASG survives instance failure but not the zone failure you actually fear."
          },
          {
            "t": "Elastic Load Balancers",
            "d": "One stable endpoint that spreads traffic across healthy targets and kills the ones that are not.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "ALB (layer 7, host/path routing, target groups) vs NLB (layer 4, ultra-low latency, static IPs) vs GWLB",
              "Target groups, health checks, and deregistration delay for graceful shutdown",
              "Sticky sessions, SSL termination at the balancer, and access logs to S3"
            ],
            "do": [
              "Put your ASG behind an ALB with path-based routing to two target groups",
              "Break one target's health check endpoint and watch the ALB drain it",
              "Terminate TLS at the ALB with a free ACM certificate"
            ],
            "tools": ["Elastic Load Balancing", "ACM", "AWS CLI"],
            "res": [
              ["Elastic Load Balancing", "https://aws.amazon.com/elasticloadbalancing/"]
            ],
            "tip": "Health checks should test the real dependency (app responding), not just the port being open. A listening port on a broken app keeps getting traffic."
          }
        ]
      },
      {
        "t": "Networking: VPC",
        "d": "Your private slice of the AWS network: subnets, routing, and the firewalls between them.",
        "lv": 2,
        "children": [
          {
            "t": "VPC, CIDR Blocks and Subnets",
            "d": "Carve your IP space into public and private subnets across AZs: this is the foundation of every AWS design.",
            "lv": 1,
            "time": "~4h",
            "learn": [
              "VPC CIDR sizing: /16 gives 65k addresses; plan for growth across regions and environments",
              "Public subnet (route to internet gateway) vs private subnet (no direct internet); one of each per AZ",
              "Reserved addresses: AWS takes the first four and last one in every subnet"
            ],
            "do": [
              "Create a VPC (10.0.0.0/16) with two public and two private subnets across two AZs",
              "Launch an instance in each subnet type and verify only the public one is reachable from the internet",
              "Document your addressing plan: which CIDR serves app, data, and management tiers"
            ],
            "tools": ["VPC", "AWS CLI", "Terraform"],
            "res": [
              ["Amazon VPC", "https://aws.amazon.com/vpc/"]
            ],
            "badge": "LAB",
            "tip": "Do not use 10.0.0.0/16 for everything. Overlapping CIDRs make VPC peering impossible later; give each environment its own non-overlapping block."
          },
          {
            "t": "Route Tables, Internet Gateway and NAT",
            "d": "Routes decide where packets go: internet gateway for public subnets, NAT gateway for private ones to reach out.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Route tables: longest-prefix match decides the path; local route for intra-VPC traffic is implicit",
              "Internet gateway: horizontally scaled, no bandwidth limits, attached to the VPC",
              "NAT gateway: lets private instances initiate outbound traffic (updates, APIs) without inbound exposure; NAT instances are the legacy DIY version"
            ],
            "do": [
              "Attach an internet gateway and add a 0.0.0.0/0 route in the public route table",
              "Deploy a NAT gateway in a public subnet and route private subnets through it",
              "From a private instance, curl an external site (works) and try SSHing into it (fails)"
            ],
            "tools": ["VPC", "AWS CLI"],
            "res": [
              ["Amazon VPC", "https://aws.amazon.com/vpc/"]
            ],
            "tip": "NAT gateways bill per hour plus per GB. One per AZ for production; for dev, consider whether your private instances need internet at all."
          },
          {
            "t": "Security Groups vs NACLs",
            "d": "Two firewalls at two layers: stateful security groups on instances, stateless NACLs on subnets.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Security groups: stateful (return traffic allowed automatically), attached to ENIs, default deny inbound",
              "NACLs: stateless (explicit both directions), attached to subnets, evaluated by rule number",
              "Layered defense: NACL for coarse subnet rules, security groups for precise instance rules"
            ],
            "do": [
              "Lock an instance's security group to SSH from your IP only and HTTP from anywhere",
              "Add a NACL rule blocking a port and observe the difference from a security group block",
              "Reference another security group as a source instead of hardcoding IPs (e.g. app tier allows DB tier's group)"
            ],
            "tools": ["VPC", "AWS CLI"],
            "res": [
              ["Amazon VPC", "https://aws.amazon.com/vpc/"]
            ],
            "tip": "The number one connectivity bug is a security group, the number two is a route table. Check groups first, then routes, then NACLs."
          },
          {
            "t": "VPC Endpoints and Peering",
            "d": "Reach AWS services without crossing the internet, and connect VPCs privately when you must.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Gateway endpoints (S3, DynamoDB): free, route-table based; interface endpoints (most services): ENIs with private IPs, hourly cost",
              "VPC peering: private, non-transitive, no overlapping CIDRs; Transit Gateway for hub-and-spoke at scale",
              "PrivateLink: expose your service to other VPCs or accounts without either side opening to the internet"
            ],
            "do": [
              "Add an S3 gateway endpoint and confirm private instances reach S3 without a NAT gateway",
              "Peer two VPCs and verify connectivity, then try a transitive hop and watch it fail",
              "Compare peering vs Transit Gateway pricing for a 10-VPC design"
            ],
            "tools": ["VPC", "Transit Gateway", "AWS CLI", "Terraform"],
            "res": [
              ["Amazon VPC", "https://aws.amazon.com/vpc/"]
            ],
            "tip": "VPC peering is not transitive and does not scale past a handful of VPCs. If you see a peering mesh forming, switch to Transit Gateway."
          },
          {
            "t": "Route53: DNS on AWS",
            "d": "Authoritative DNS with health-checked routing: fail over between regions automatically.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Hosted zones (public vs private), record types, alias records pointing at AWS resources for free",
              "Routing policies: simple, weighted, latency-based, geolocation, failover",
              "Health checks plus DNS failover: Route53 stops answering with the unhealthy endpoint"
            ],
            "do": [
              "Create a public hosted zone, delegate your domain, and add A and alias records",
              "Set up a health check on your ALB and a failover routing policy to a second region",
              "Create a private hosted zone and resolve internal service names from your VPC"
            ],
            "tools": ["Route53", "AWS CLI"],
            "res": [
              ["Amazon Route 53", "https://aws.amazon.com/route53/"]
            ],
            "tip": "Use alias records instead of CNAMEs at the zone apex and for AWS targets: they are free, faster, and apex CNAMEs are not even legal DNS."
          },
          {
            "t": "CloudFront CDN",
            "d": "Serve static and dynamic content from 400+ edge locations with signed URLs and cache control.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Distributions, origins (S3, ALB, custom), behaviors, and cache policies",
              "Invalidations to purge stale content; versioned filenames as the cheaper alternative",
              "Signed URLs/cookies for private content; OAC to keep the S3 origin private"
            ],
            "do": [
              "Create a distribution in front of an S3 bucket using Origin Access Control",
              "Set cache behaviors: long TTL for /assets/*, no cache for /api/*",
              "Generate a signed URL and confirm it expires when it should"
            ],
            "tools": ["CloudFront", "S3", "AWS CLI"],
            "res": [
              ["Amazon CloudFront", "https://aws.amazon.com/cloudfront/"]
            ],
            "tip": "Invalidate sparingly: invalidations cost money and take minutes. Version your asset filenames so new deploys never need a purge."
          }
        ]
      },
      {
        "t": "Storage and Databases",
        "d": "Object storage for everything, and managed databases so you never patch a database server again.",
        "lv": 2,
        "children": [
          {
            "t": "S3 Buckets, Objects and Versioning",
            "d": "Infinite object storage with 11 nines of durability: buckets, keys, and versions of everything.",
            "lv": 1,
            "time": "~3h",
            "learn": [
              "Buckets are global-named but regional; objects are key plus data plus metadata, up to 5 TB",
              "Versioning keeps every overwrite; MFA delete and lifecycle rules clean up old versions",
              "Event notifications: trigger Lambda on object creation for serverless processing pipelines"
            ],
            "do": [
              "Create a bucket with a globally unique name, upload files, and enable versioning",
              "Overwrite a file, then restore the previous version",
              "Wire an S3 event notification to a Lambda that logs each upload"
            ],
            "tools": ["S3", "AWS CLI", "Lambda"],
            "res": [
              ["Amazon S3", "https://aws.amazon.com/s3/"]
            ],
            "tip": "Bucket names are globally unique across all of AWS. If your clever name is taken, it is taken for everyone, forever."
          },
          {
            "t": "S3 Storage Classes and Lifecycle Rules",
            "d": "Pay for the access pattern you have: Standard for hot data, Glacier for archives, Intelligent-Tiering when unsure.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Classes: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant/Flexible/Deep Archive",
              "Retrieval costs and minimum storage durations: Glacier is cheap to store, expensive to fetch fast",
              "Lifecycle rules: transition objects between classes and expire old versions automatically"
            ],
            "do": [
              "Create a lifecycle rule moving objects to Standard-IA after 30 days and Glacier after 90",
              "Enable Intelligent-Tiering on a bucket with unknown access patterns",
              "Compare the monthly cost of 1 TB in Standard vs Deep Archive"
            ],
            "tools": ["S3", "AWS CLI", "Cost Explorer"],
            "res": [
              ["Amazon S3", "https://aws.amazon.com/s3/"]
            ],
            "tip": "Retrieving from Glacier has minimum durations and per-request fees. Archiving small files you will need tomorrow is a classic false economy."
          },
          {
            "t": "S3 Security: Block Public Access and Encryption",
            "d": "S3 is private by default: keep it that way with account-level blocks and encryption on everything.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Block Public Access at account and bucket level: the master switch against accidental exposure",
              "Encryption: SSE-S3 (AWS-managed keys), SSE-KMS (your keys, audit trail), client-side for maximum control",
              "Presigned URLs: temporary access to private objects without making them public"
            ],
            "do": [
              "Enable Block Public Access on the account, then generate a presigned URL for a private object",
              "Turn on default SSE-KMS encryption on a bucket and verify with object metadata",
              "Run an S3 access point or Access Analyzer check for public buckets"
            ],
            "tools": ["S3", "KMS", "IAM Access Analyzer", "AWS CLI"],
            "res": [
              ["Amazon S3", "https://aws.amazon.com/s3/"]
            ],
            "tip": "If a bucket must serve public content, serve it through CloudFront with OAC instead of making the bucket public. Public buckets are an audit finding."
          },
          {
            "t": "Choosing Storage: EBS, EFS and S3",
            "d": "Block for one instance, file for many instances, object for everything else: pick by access pattern.",
            "lv": 2,
            "time": "~2h",
            "learn": [
              "EBS: block storage for a single EC2 instance in one AZ; EFS: NFS file system shared across instances and AZs",
              "S3: object storage for any scale, accessed over HTTPS, not mountable as a filesystem",
              "Decision rule: database files go on EBS, shared uploads on EFS or S3, backups and static assets on S3"
            ],
            "do": [
              "Mount an EFS filesystem from two instances and write from one, read from the other",
              "Benchmark sequential reads on EBS gp3 vs EFS and note the difference",
              "Decide the storage for three scenarios: WordPress uploads, Postgres data files, video archive"
            ],
            "tools": ["EBS", "EFS", "S3", "EC2"],
            "res": [
              ["Amazon EBS", "https://aws.amazon.com/ebs/"],
              ["Amazon S3", "https://aws.amazon.com/s3/"]
            ],
            "tip": "Do not run a database on EFS. Shared filesystems and database I/O patterns are a slow, painful combination."
          },
          {
            "t": "RDS Instances and Engines",
            "d": "Managed relational databases: pick the engine, size the instance, and let AWS handle patching.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Engines: PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, Aurora (AWS's cloud-native engine)",
              "Instance classes mirror EC2; storage autoscaling grows the volume as data grows",
              "Parameter groups and option groups: the knobs you still control in a managed database"
            ],
            "do": [
              "Launch a PostgreSQL RDS instance in private subnets with storage autoscaling",
              "Connect with psql through a bastion host or SSM session",
              "Change a parameter (e.g. log_min_duration_statement) via a custom parameter group"
            ],
            "tools": ["RDS", "psql", "AWS Systems Manager"],
            "res": [
              ["Amazon RDS", "https://aws.amazon.com/rds/"]
            ],
            "tip": "Never put RDS in a public subnet. If your app and database are in the same VPC, there is no reason the database needs a public IP."
          },
          {
            "t": "RDS High Availability and Backups",
            "d": "Multi-AZ for failover, read replicas for scale, automated backups and snapshots for recovery.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Multi-AZ: synchronous standby in another AZ with automatic failover; not for read scaling",
              "Read replicas: asynchronous copies for read traffic; Aurora replicas share storage with the writer",
              "Automated backups (point-in-time recovery) vs manual snapshots; backup window and retention"
            ],
            "do": [
              "Enable Multi-AZ on your instance and trigger a reboot with failover to watch the standby take over",
              "Create a read replica and point a read-only query workload at it",
              "Restore a snapshot to a new instance and verify the data"
            ],
            "tools": ["RDS", "AWS CLI"],
            "res": [
              ["Amazon RDS", "https://aws.amazon.com/rds/"]
            ],
            "tip": "Test your restore procedure before you need it. A backup you have never restored is a hope, not a plan."
          },
          {
            "t": "DynamoDB Data Modeling",
            "d": "Single-digit-millisecond NoSQL at any scale, if you model access patterns before you model entities.",
            "lv": 3,
            "time": "~4h",
            "learn": [
              "Tables, items, attributes; partition key (and optional sort key) decide data placement",
              "Single-table design: model by access pattern, use GSIs for alternate query paths",
              "Capacity: on-demand vs provisioned with autoscaling; DynamoDB Streams for change-data capture"
            ],
            "do": [
              "Design a table for a URL shortener: partition key, sort key, and one GSI for analytics queries",
              "Load 10k items and query them with KeyConditionExpression, not scans",
              "Enable TTL on a session table and watch expired items disappear"
            ],
            "tools": ["DynamoDB", "AWS CLI", "NoSQL Workbench"],
            "res": [
              ["Amazon DynamoDB", "https://aws.amazon.com/dynamodb/"]
            ],
            "tip": "Scans are the DynamoDB code smell. If your design needs frequent scans, your key design is wrong, not DynamoDB."
          },
          {
            "t": "ElastiCache: In-Memory Caching",
            "d": "Redis or Memcached in front of your database: cut latency and database load for hot data.",
            "lv": 2,
            "time": "~2h",
            "tag": "opt",
            "learn": [
              "Redis (rich data structures, persistence, pub/sub) vs Memcached (simple, multithreaded)",
              "Cache-aside pattern: check cache, fall back to DB, populate on miss; TTLs to bound staleness",
              "Cluster mode for sharding; place ElastiCache in the same VPC and AZs as your app"
            ],
            "do": [
              "Launch a Redis cluster and connect with redis-cli from your EC2 instance",
              "Implement cache-aside in a small app and measure the latency difference",
              "Set eviction policies and watch memory pressure handling"
            ],
            "tools": ["ElastiCache", "redis-cli"],
            "res": [
              ["Amazon ElastiCache", "https://aws.amazon.com/elasticache/"]
            ],
            "tip": "Caching hides database problems instead of fixing them. Add a cache for performance, not as a bandage for missing indexes."
          }
        ]
      },
      {
        "t": "Serverless and Event-Driven",
        "d": "Lambda functions reacting to events: APIs, queues, schedules, and file uploads with no servers to manage.",
        "lv": 2,
        "children": [
          {
            "t": "Lambda Functions and Event Sources",
            "d": "Write a function, pick a trigger, and AWS runs your code when the event fires.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "Handler signature, event and context objects; runtimes (Node.js 22/24, Python 3.13 as of 2026)",
              "Event source mappings: S3, DynamoDB Streams, Kinesis, SQS polling vs direct invocation",
              "Execution role permissions and resource-based policies controlling who may invoke"
            ],
            "do": [
              "Deploy a Node.js 24 function that resizes images uploaded to S3",
              "Invoke it from the CLI with a test event and read the CloudWatch logs",
              "Add an SQS trigger and observe batching and partial batch responses"
            ],
            "tools": ["Lambda", "AWS CLI", "AWS SAM"],
            "res": [
              ["AWS Lambda", "https://aws.amazon.com/lambda/"],
              ["Lambda runtimes", "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"]
            ],
            "tip": "Node.js 20 hit end of support in April 2026. New functions should target Node.js 22 or 24, and old ones need a runtime upgrade plan."
          },
          {
            "t": "Lambda Layers, Environment and Limits",
            "d": "Share code with layers, configure with environment variables, and respect the hard limits.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Layers: shared libraries and runtimes across functions; keep deployment packages small",
              "Environment variables for config, encrypted with KMS; memory settings also set CPU proportionally",
              "Limits: 15-minute timeout, 10 GB memory, 250 MB unzipped package, 1000 concurrent executions default"
            ],
            "do": [
              "Publish a layer with a shared utility and attach it to two functions",
              "Store a database password in an encrypted environment variable",
              "Right-size memory with AWS Lambda Power Tuning and compare cost per invocation"
            ],
            "tools": ["Lambda", "AWS CLI", "Lambda Power Tuning"],
            "res": [
              ["AWS Lambda", "https://aws.amazon.com/lambda/"]
            ],
            "tip": "More memory means proportionally more CPU, so increasing memory often makes functions faster AND cheaper. Always test before assuming 128 MB is economical."
          },
          {
            "t": "Lambda Cold Starts and Performance Tuning",
            "d": "Why the first request is slow and the levers that fix it: provisioned concurrency, SnapStart, and slim packages.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Cold start anatomy: download, init, handler; what makes it worse (VPC ENIs historically, huge packages, Java)",
              "Provisioned concurrency for latency-sensitive paths; SnapStart for Java",
              "Keeping handlers lean: lazy-load heavy imports, reuse connections outside the handler"
            ],
            "do": [
              "Measure cold vs warm latency with X-Ray traces on a test function",
              "Enable provisioned concurrency and re-measure p99 latency",
              "Refactor a function to initialize the DB client outside the handler and compare"
            ],
            "tools": ["Lambda", "X-Ray", "CloudWatch"],
            "res": [
              ["AWS Lambda", "https://aws.amazon.com/lambda/"]
            ],
            "tip": "Provisioned concurrency bills even with zero traffic. Use it on the one endpoint where latency matters, not on every function."
          },
          {
            "t": "API Gateway",
            "d": "A managed front door for your APIs: REST or HTTP APIs routing to Lambda with throttling and auth.",
            "lv": 2,
            "time": "~4h",
            "learn": [
              "HTTP APIs (cheap, fast, enough for most) vs REST APIs (usage plans, WAF, request validation)",
              "Stages, deployments, and custom domains with ACM certificates",
              "Authorization: IAM, Cognito user pools, Lambda authorizers; throttling and usage plans per client"
            ],
            "do": [
              "Build an HTTP API with three routes backed by Lambda functions",
              "Add a custom domain and a Cognito authorizer protecting one route",
              "Set a throttle limit and watch 429s in the access logs when you exceed it"
            ],
            "tools": ["API Gateway", "Lambda", "Cognito", "ACM"],
            "res": [
              ["Amazon API Gateway", "https://aws.amazon.com/api-gateway/"]
            ],
            "tip": "Start with HTTP APIs. Most teams pay for REST API features (usage plans, WAF integration) they never use."
          },
          {
            "t": "SQS and SNS Messaging",
            "d": "Decouple with queues and topics: retries, dead letters, and fan-out without tight coupling.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "SQS: pull-based queues with visibility timeouts; standard vs FIFO (ordering and deduplication)",
              "SNS: push-based pub/sub fanning out to SQS, Lambda, email, SMS",
              "Dead-letter queues: where poison messages go after max receives; alarms on DLQ depth"
            ],
            "do": [
              "Create a queue, send messages, and consume them with a Lambda using partial batch failure handling",
              "Build an SNS topic fanning out to two queues and one email subscription",
              "Configure a DLQ, poison a message, and watch it land in the DLQ"
            ],
            "tools": ["SQS", "SNS", "Lambda", "AWS CLI"],
            "res": [
              ["Amazon SQS", "https://aws.amazon.com/sqs/"],
              ["Amazon SNS", "https://aws.amazon.com/sns/"]
            ],
            "tip": "Always set a DLQ on production queues. Without one, a single bad message retries forever and blocks nothing while alerting nobody."
          },
          {
            "t": "EventBridge: Scheduled and Event-Driven Flows",
            "d": "The event bus for AWS: cron schedules, service events, and your own domain events routed to targets.",
            "lv": 3,
            "time": "~3h",
            "learn": [
              "Event buses, rules with event patterns, and targets (Lambda, Step Functions, SQS)",
              "Scheduler for cron and one-time tasks replacing CloudWatch Events scheduled rules",
              "Schema registry and archive/replay: reprocess past events after a bug fix"
            ],
            "do": [
              "Create a rule triggering a Lambda every weekday at 9 AM with a cron expression",
              "Route EC2 state-change events to an SNS topic for ops notifications",
              "Publish a custom event from your app and add a second consumer without touching the producer"
            ],
            "tools": ["EventBridge", "Lambda", "AWS CLI"],
            "res": [
              ["Amazon EventBridge", "https://aws.amazon.com/eventbridge/"]
            ],
            "tip": "EventBridge decouples producers from consumers, which also decouples their deploys. That is the real win: independent teams shipping independently."
          }
        ]
      },
      {
        "t": "Observability, Cost and Operations",
        "d": "Watch it, log it, and pay for it wisely: CloudWatch, auditing, and cost control in production.",
        "lv": 2,
        "children": [
          {
            "t": "CloudWatch Metrics and Alarms",
            "d": "Every AWS service emits metrics: graph them, alarm on them, and page before users notice.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Namespaces, metrics, dimensions, and statistics; default vs detailed monitoring",
              "Alarms: thresholds, evaluation periods, missing-data handling, SNS actions",
              "Dashboards and composite alarms to cut alert noise"
            ],
            "do": [
              "Create an alarm on EC2 CPU over 80% for 5 minutes notifying an SNS topic",
              "Build a dashboard with request count, error rate, and latency for your ALB",
              "Trigger the alarm on purpose and confirm the notification arrives"
            ],
            "tools": ["CloudWatch", "SNS"],
            "res": [
              ["Amazon CloudWatch", "https://aws.amazon.com/cloudwatch/"]
            ],
            "tip": "Alarm on symptoms users feel (error rate, latency), not just causes (CPU). A server at 95% CPU serving fine needs no page at 3 AM."
          },
          {
            "t": "CloudWatch Logs and Insights",
            "d": "Centralize logs from every service, then query them like a database when things break.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Log groups, streams, retention policies; shipping EC2 logs with the CloudWatch agent",
              "Logs Insights query language: filter, parse, stats, and time-series over millions of events",
              "Metric filters: turn log patterns (like ERROR counts) into metrics and alarms"
            ],
            "do": [
              "Install the CloudWatch agent on EC2 and ship nginx access logs",
              "Write a Logs Insights query finding the top 10 slowest Lambda invocations",
              "Create a metric filter counting 500s in ALB logs and alarm on it"
            ],
            "tools": ["CloudWatch Logs", "CloudWatch agent"],
            "res": [
              ["Amazon CloudWatch", "https://aws.amazon.com/cloudwatch/"]
            ],
            "tip": "Set log retention deliberately. The default never-expire keeps every debug line forever, and storage is the quiet part of the CloudWatch bill."
          },
          {
            "t": "Cost Explorer, Budgets and Tagging",
            "d": "Know where every dollar goes: tag everything, slice spend by tag, and alert before the month ends.",
            "lv": 2,
            "time": "~3h",
            "learn": [
              "Cost allocation tags (user-defined, activated in billing) for per-project and per-environment spend",
              "Cost Explorer grouping and filtering; Cost Anomaly Detection for surprise spikes",
              "Budgets with forecast alerts and AWS Budgets Actions that can stop resources automatically"
            ],
            "do": [
              "Activate your Project tags as cost allocation tags and wait for them to appear",
              "Build a Cost Explorer report grouped by tag showing each project's monthly spend",
              "Create a budget at 80% forecast with an email alert and one automated action"
            ],
            "tools": ["Cost Explorer", "AWS Budgets", "Cost Anomaly Detection"],
            "res": [
              ["AWS Cost Management", "https://aws.amazon.com/aws-cost-management/"]
            ],
            "tip": "Untagged resources are invisible money. Enforce tagging with an SCP that denies creating resources without required tags."
          },
          {
            "t": "Savings Plans and Reserved Instances",
            "d": "Commit to steady usage and cut the compute bill by up to 72%: know which commitment fits.",
            "lv": 3,
            "time": "~2h",
            "learn": [
              "Compute Savings Plans: commitment to $/hour of compute, applies across EC2, Fargate, Lambda",
              "EC2 Instance Savings Plans and Standard RIs: deeper discounts, less flexibility",
              "Coverage and utilization reports: buy for the steady baseline, never for the peaks"
            ],
            "do": [
              "Run the Savings Plans recommendation report and note the suggested hourly commitment",
              "Calculate payback for a 1-year vs 3-year commitment on your baseline",
              "Set a calendar reminder to review utilization quarterly"
            ],
            "tools": ["AWS Cost Explorer", "AWS Pricing Calculator"],
            "res": [
              ["AWS Savings Plans", "https://aws.amazon.com/savingsplans/"]
            ],
            "tip": "Commit to the trough, not the average. Overcommitted savings plans on shrinking workloads are just prepaid waste."
          }
        ]
      }
    ]
  }
});

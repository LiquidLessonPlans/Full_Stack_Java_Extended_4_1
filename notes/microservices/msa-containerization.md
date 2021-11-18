## Containerization

When we move software from a developer's laptop to a test environment, from a staging environment into production, and perhaps from a physical machine in a data center to a virtual machine in a private or public cloud, problems may arise when the supporting software environment is not identical.

For example, You're going to test software using Python 2.7, and then it's going to run on Python 3 in production and something weird will happen. Or you'll rely on the behavior of a certain version of an SSL library and a future update changes that behavior. You'll run your tests on Debian and production is on Red Hat, and all sorts of weird things happen.

It's not just different software that can cause problems. If there is any difference in the network topology or the security policies and storage, these may also cause problems.

**Containers** are a solution to this problem. A container is a standard unit of software that packages up an application and all its dependencies so the application runs quickly and reliably from one computing environment to another.

**Containerization** is the process of packaging an application along with its required libraries, frameworks, and configuration files together so that it can be run in various computing environments efficiently. In simpler terms, containerization is the encapsulation of an application and its required environment.

[Docker](https://www.docker.com/) is one of the world's leading software containerization platforms. It encapsulates our microservice into a **Docker container** which can then be independently maintained and deployed. Each of these containers will be responsible for one specific business functionality.

With Docker, we can make our application independent of the host environment. Since we use a microservice architecture, we can now encapsulate each microservice in separate Docker containers. Docker containers are lightweight, resource-isolated environments through which we can build, maintain, ship, and deploy our application.

![Container](./images/container.PNG)

You can find a detailed explanation of Docker [here](https://gitlab.com/revature_training/docker-team).

### References

* [Containerization - Video Tutorial](https://www.youtube.com/watch?v=0qotVMX-J5s)
* [Docker - Content Library](https://www.docker.com/resources)
* [Containerization explained: what it is, benefits and applications](https://www.masterdc.com/blog/what-is-containerization-benefits-explained/)
* [Docker - Video Tutorial for Beginners](https://www.youtube.com/watch?v=fqMOX6JJhGo)

## Container Orchestration

Container orchestration automates the deployment, management, scaling, and networking of containers.

Container orchestration tools provide a framework for managing containers and microservice architectures at scale. There are many container orchestration tools that can be used for container lifecycle management. Some popular options are [Kubernetes](https://kubernetes.io/), [Docker Swarm](https://docs.docker.com/engine/swarm/swarm-tutorial/), and [Apache Mesos](http://mesos.apache.org/).

**Kubernetes** orchestration allows us to build application services that span multiple containers, schedule containers across a cluster, scale those containers, and manage their health over time.

Kubernetes eliminates many of the manual processes involved in deploying and scaling containerized applications. We can cluster together groups of hosts, either physical or virtual machines, running Linux containers, and Kubernetes gives you the platform to easily and efficiently manage those clusters. A **Kubernetes cluster** is a set of node machines for running containerized applications.

### References

* [Container Orchestration - Video Tutorial](https://www.youtube.com/watch?v=kBF6Bvth0zw)
* [Kubernetes Documentation](https://kubernetes.io/docs/home/)

# Spring Annotations

## Spring Config
 - @Configuration - marks a class as the bean configuration class which has methods that return objects to be beanified.
 - @ComponentScan - tells IoC container to configure by scanning for annotated components
 - @Bean - marks a class as a bean (not for component scanning!)
 - @Component - marks a class as a component (a bean) for component scanning. There are also the "stereotype" annotations below:
   - @Repository - marks as a JPA repository bean
   - @Service - marks as a service bean
   - @Controller - marks as a controller (servlet) bean
 - @Autowired - injects dependencies from IoC contrainer automagically
 - @Resource
 - @Qualifier
 - @Required
 - @Inject - Another way to inject dependencies from IoC container
 - @Named

## Spring Data
 - @Query
 - @Repository - Stereotype annotation - marks as a JPA repository bean
 - @Transactional - Sets transaction settings
 - @Param - marks a field as a parameter for a JPQL query
 - @Id - marks an entity field as the ID (the PK of  database entry)
 - @Transient
 - @CreatedBy, @LastModifiedBy
 - @CreatedDate, @LastModifiedDate
 - @Valid
 - @Min - spring JPA validation, sets minimum valid value
 - @Max - spring JPA validation, sets maximum valid value
 - @NotNull - spring JPA validation, field cannot be null
 - @Range - spring JPA validation, sets minimum and maximum range of values
 - @EnableTransactionManagement
 - @EnableJpaRepositories

## Spring MVC (Web)
 - @Controller
 - @Restcontroller
 - @PathVariable
 - @RequestMapping
 - @GetMapping
 - @PostMapping
 - @PutMapping
 - @DeleteMapping
 - @RequestBody
 - @ResponseBody
 - @ResponseStatus
 - @RequestParam
 - @RequestHeader

## misc
 - @DateTimeFormat

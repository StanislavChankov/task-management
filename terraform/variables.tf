variable "key_name" {
  type        = string                                                    // stan-key-pair
  description = "The name for ssh key, used for aws_launch_configuration" // stan-key-pair
}

variable "cluster_name" {
  type        = string
  description = "The name of AWS ECS cluster"
}

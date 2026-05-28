/**
 * ! Terraform vairbales 
 * 
 * piuchle lecture mein jo humne tarika dekha hum industry mein 
 * waise kaam nhi krte h 
 * so ocmment th emain.tf file code first 
 * 
 * humne dkeha tha lsst lecture ein ami id ke liye  aws  console pe jaana pada th a
 * ab hum uss chiz ko dynamicaaly fetch karnege 
 * 
 * ek vairbaes.tf naam ki file bano 
 *  
 * outputs naam se  file bano 
 * 
 * 
provider "aws" {
  region = var.aws_region
}

data "aws_ami" "amazon_linux" {
  most_recent = true

  owners = ["amazon"]

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }
}

resource "aws_instance" "my_ec2" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type

  tags = {
    Name = var.instance_name
  }
}


variable "aws_region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "instance_name" {
  default = "ayushTerraform"
}


output "instance_public_ip" {
  value = aws_instance.my_ec2.public_ip
}

! short  descriptive meaning and eplanaiton of the above code 


 */
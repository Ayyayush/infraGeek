
resource "aws_instance" "my_ec2" {
  ami           =var
  instance_type = var.instance_type

  tags = {
    Name = name_tag
  }


}
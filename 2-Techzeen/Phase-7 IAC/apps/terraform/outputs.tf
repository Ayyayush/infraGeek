# output "instance_public_ip" {
#   value = aws_instance.my_ec2.public_ip
# }

#  condtional expressions and locals 
# output "instance_public_ip" {
#   value = local.name_tag
# }

#  depends on
output "bucket_name" {
  value = aws_s3_bucket.my_bucket.id
}
<?php
header('Content-Type: application/json');

// Only accept POST requests.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);

if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body']);
    exit;
}

function field($body, $key) {
    return isset($body[$key]) ? trim(strip_tags((string) $body[$key])) : '';
}

$name = field($body, 'name');
$phone = field($body, 'phone');
$email = field($body, 'email');
$projectType = field($body, 'projectType');
$city = field($body, 'city');
$budget = field($body, 'budget');
$message = field($body, 'message');

if ($name === '' || $phone === '' || $email === '' || $projectType === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

$to = 'shiboo@maharanadesigners.com';
$subject = 'New enquiry from maharanadesigners.com — ' . $name;

$lines = [
    "New enquiry received via the website:",
    "",
    "Name: $name",
    "Phone: $phone",
    "Email: $email",
    "Project Type: $projectType",
];
if ($city !== '') {
    $lines[] = "City: $city";
}
if ($budget !== '') {
    $lines[] = "Budget: $budget";
}
if ($message !== '') {
    $lines[] = "";
    $lines[] = "Message:";
    $lines[] = $message;
}
$body_text = implode("\n", $lines);

$headers = "From: no-reply@maharanadesigners.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body_text, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send enquiry']);
    exit;
}

echo json_encode(['ok' => true]);
